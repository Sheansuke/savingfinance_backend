"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
var express_1 = __importDefault(require("express"));
var authJWT_1 = require("../../configs/authJWT");
var userController_1 = require("./userController");
var router = express_1.default.Router();
exports.userRoutes = router;
var path = "/user";
router.get(path + "/getAllUsers/", authJWT_1.isAuthJWT, userController_1.getAllUsers);
// RECIVE A _ID
router.get(path + "/getUser/", authJWT_1.isAuthJWT, userController_1.getUser);
// RECIVE A _ID and A BODY: ['name of categorie']
router.post(path + "/addNewCategorie/", authJWT_1.isAuthJWT, userController_1.addNewCategorie);
