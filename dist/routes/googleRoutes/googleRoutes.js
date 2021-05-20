"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleRoutes = void 0;
var express_1 = __importDefault(require("express"));
var passport_1 = __importDefault(require("passport"));
var router = express_1.default.Router();
exports.googleRoutes = router;
var path = "/auth/google";
router.get("" + path, passport_1.default.authenticate("google", {
    scope: ["profile"],
}));
router.get(path + "/callback/", passport_1.default.authenticate("google", { failureRedirect: "/failed" }), function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("" + process.env.CORS_ORIGIN);
});
router.get(path + "/logout/", function (req, res) {
    req.logout();
    res.redirect("" + process.env.CORS_ORIGIN);
});
router.get(path + "/failed/", function (req, res) {
    res.status(401).send({
        serverInfo: {
            code: 401,
            message: "Algo fallo al autentificarte :(",
        },
    });
});
