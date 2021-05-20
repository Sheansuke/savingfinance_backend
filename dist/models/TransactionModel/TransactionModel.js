"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSchema = void 0;
var mongoose_1 = require("mongoose");
var AccountModel_1 = require("../AccountModel/AccountModel");
var CategorieModel_1 = require("../CategorieModel/CategorieModel");
exports.TransactionSchema = new mongoose_1.Schema({
    description: String,
    type: String,
    balance: Number,
    from: {
        type: AccountModel_1.AccountSchema,
    },
    to: {
        type: CategorieModel_1.CategorieSchema,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});
