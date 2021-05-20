"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRoutes = void 0;
var express_1 = __importDefault(require("express"));
var isLoggedIn_1 = require("../../configs/isLoggedIn");
var mainController_1 = require("./mainController");
var router = express_1.default.Router();
exports.mainRoutes = router;
var path = "/";
router.get("" + path, mainController_1.mainPage);
router.get(path + "getToken", isLoggedIn_1.isLoggedIn, mainController_1.getToken);
router.get("/dashboard/", isLoggedIn_1.isLoggedIn);
router.get("/dashboard/accounts/", isLoggedIn_1.isLoggedIn);
router.get("/dashboard/categories/", isLoggedIn_1.isLoggedIn);
router.get("/dashboard/transactions/", isLoggedIn_1.isLoggedIn);
router.get("/dashboard/overview/", isLoggedIn_1.isLoggedIn);
