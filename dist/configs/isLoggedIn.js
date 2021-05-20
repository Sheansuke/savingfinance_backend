"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = void 0;
var isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.status(401).send({
            serverInfo: { code: 401, authorized: false, message: "Unauthorized" },
        });
    }
};
exports.isLoggedIn = isLoggedIn;
