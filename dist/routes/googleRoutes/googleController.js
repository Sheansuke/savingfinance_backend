"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleLogout = exports.googleCallback = exports.googleAuth = void 0;
var passport_1 = __importDefault(require("passport"));
// AUTH INITIALIZED
var googleAuth = function (req, res) {
    passport_1.default.authenticate("google", {
        scope: ["profile"],
    });
};
exports.googleAuth = googleAuth;
// AUTH SECOND STEP
var googleCallback = function (req, res) {
    passport_1.default.authenticate("google", { failureRedirect: "/failed" });
    // Successful authentication, redirect home.
    res.redirect("" + process.env.CORS_ORIGIN);
};
exports.googleCallback = googleCallback;
// LOGOUT XD
var googleLogout = function (req, res) {
    req.logout();
    res.redirect("" + process.env.CORS_ORIGIN);
};
exports.googleLogout = googleLogout;
