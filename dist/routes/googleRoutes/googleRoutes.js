"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleRoutes = void 0;
var express_1 = __importDefault(require("express"));
var googleController_1 = require("./googleController");
var router = express_1.default.Router();
exports.googleRoutes = router;
// MAIN PATH
var path = "/auth/google";
router.get("" + path, googleController_1.googleAuth);
router.get(path + "/callback/", googleController_1.googleCallback);
router.get(path + "/logout/", googleController_1.googleLogout);
