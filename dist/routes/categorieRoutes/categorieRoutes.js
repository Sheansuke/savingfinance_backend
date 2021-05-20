"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorieRoutes = void 0;
var express_1 = __importDefault(require("express"));
// import {} from "./categorieController";
var router = express_1.default.Router();
exports.categorieRoutes = router;
router.get("/categories");
router.post("/categories");
router.put("/categorie");
