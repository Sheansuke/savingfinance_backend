import { config } from "dotenv";
import chalk from "chalk";
import express from "express";
import cors from "cors";
import passport from "passport";
import cookieSession from "cookie-session";
import Keygrip from "keygrip";
import "./configs/passport";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import { dbConection } from "./dbConection";
import { appRoutes } from "./routes/routes";


// DOTENV
config()

// CHECK NODE_ENV AN SET MODE
let isDevelopment = true
if (process.env.NODE_ENV === "production") {
  isDevelopment = false
}

// BASIC CONFIG
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

// CORS
app.use(cors({ origin: `${process.env.CORS_ORIGIN}`, credentials: true }));
app.set("trust proxy", 1);

// WHITELIST
app.use(function (req, res, next) {
  var whitelist = [`${process.env.CORS_ORIGIN}`];
  var host = req.get("host");
  whitelist.forEach(function (val, key) {
    if (host!.indexOf(val) > -1) {
      res.setHeader("Access-Control-Allow-Origin", host!);
    }
  });
  next();
});

// COOKIE
app.use(
  cookieSession({
    name: "session",
    keys: new Keygrip(["key1", "key2"], "SHA384", "base64"),
  })
);

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("dev"));

// MONGOOSE CONECTION
dbConection(
  isDevelopment ? `${process.env.MONGO_DEV_URI}` : `${process.env.MONGODB_URI}`
);

// FUNCTION WITH APP.USE() ROUTES
appRoutes(app);

// SERVER LISTEN
console.log(chalk.green(`App initialized in mode: ${process.env.NODE_ENV}`));


// DIFERENT PORT WHEN RUN ON TEST MODE
const SERVERPORT = process.env.NODE_ENV == "test" ? 8000 : process.env.PORT

console.log("------------->>>>>>>>>>>>", process.env.GOOGLE_CALLBACK_URL)

export const server = app.listen(SERVERPORT, () => {
  console.log(chalk.green(`Server running on http://localhost:${SERVERPORT}/dashboard`));
});
export default app