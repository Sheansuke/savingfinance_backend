"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorieSchema = void 0;
var mongoose_1 = require("mongoose");
exports.CategorieSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
    },
    balance: Number,
}, { _id: false });
