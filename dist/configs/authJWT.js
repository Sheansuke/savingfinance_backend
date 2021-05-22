"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = exports.isAuthJWT = void 0;
var jwt = require("jsonwebtoken");
// CHECK IF TOKEN EXIST IN HEADERS, IF EXIST ALLOW ACCESS TO USER
var isAuthJWT = function (req, res, next) {
    var authHeader = req.headers.accesstoken;
    if (authHeader) {
        var token = authHeader;
        jwt.verify(token, "" + process.env.JWT_SECRET, { ignoreExpiration: false }, function (err, user) {
            if (err) {
                return res.status(401).json({
                    serverInfo: {
                        code: 401,
                        authorized: false,
                        message: "Unauthorized",
                    },
                });
            }
            req.user = user;
            next();
        });
    }
    else {
        res.status(401);
    }
};
exports.isAuthJWT = isAuthJWT;
// CREATE TOKEN
var createToken = function (req, res, next) {
    if (req.user._id) {
        // Generate an access token
        var accessToken = jwt.sign({ userId: req.user._id }, "" + process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        res.json(accessToken);
    }
    else {
        res.json({
            serverInfo: {
                code: 401,
                authorized: false,
                message: "Oh, something is failed, please check your account",
            },
        });
    }
};
exports.createToken = createToken;
