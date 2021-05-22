"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = void 0;
// CHECK IF USER IS LOGGED, IF IS LOGGED ALLOW ACCESS TO USER
var isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.status(401).json({
            serverInfo: { code: 401, authorized: false, message: "Unauthorized", data: "No access" },
        });
    }
};
exports.isLoggedIn = isLoggedIn;
