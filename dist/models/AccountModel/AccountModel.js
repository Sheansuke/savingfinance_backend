"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountSchema = void 0;
var mongoose_1 = require("mongoose");
exports.AccountSchema = new mongoose_1.Schema({
    icon: String,
    name: String,
    currency: String,
    balance: Number,
    description: String,
    includeInTotal: Boolean,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});
