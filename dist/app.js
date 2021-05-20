"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var dotenv_1 = require("dotenv");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var passport_1 = __importDefault(require("passport"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var keygrip_1 = __importDefault(require("keygrip"));
require("./configs/passport");
var body_parser_1 = require("body-parser");
var morgan_1 = __importDefault(require("morgan"));
var dbConection_1 = require("./dbConection");
var routes_1 = require("./routes/routes");
// DOTENV
dotenv_1.config();
var isDevelopment = process.env.NODE_ENV == "development" ? true : false;
var app = express_1.default();
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));
// CORS
app.use(cors_1.default({ origin: "" + process.env.CORS_ORIGIN, credentials: true }));
app.set("trust proxy", 1);
// WHITELIST
app.use(function (req, res, next) {
    var whitelist = ["" + process.env.CORS_ORIGIN];
    var host = req.get("host");
    whitelist.forEach(function (val, key) {
        if (host.indexOf(val) > -1) {
            res.setHeader("Access-Control-Allow-Origin", host);
        }
    });
    next();
});
// COOKIE
app.use(cookie_session_1.default({
    name: "session",
    keys: new keygrip_1.default(["key1", "key2"], "SHA384", "base64"),
}));
// PASSPORT
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(morgan_1.default("dev"));
// MONGOOSE CONECTION
dbConection_1.dbConection(isDevelopment ? "" + process.env.MONGO_DEV_URI : "" + process.env.MONGODB_URI);
// FUNCTION WITH APP.USE() ROUTES
routes_1.appRoutes(app);
// SERVER LISTEN
console.log("App initialized in mode: " + process.env.NODE_ENV);
exports.server = app.listen(process.env.PORT, function () {
    console.log("Server running on http://localhost:" + process.env.PORT + "/");
});
exports.default = app;
