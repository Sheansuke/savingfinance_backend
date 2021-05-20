"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = exports.isAuthJWT = void 0;
var jwt = require("jsonwebtoken");
// check if Token exists on request Header and give access to resources
var isAuthJWT = function (req, res, next) {
    var authHeader = req.headers.accesstoken;
    if (authHeader) {
        var token = authHeader;
        jwt.verify(token, "" + process.env.JWT_SECRET, { ignoreExpiration: false }, function (err, user) {
            if (err) {
                return res.status(401).send({
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
        res.sendStatus(401);
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
        res.send(accessToken);
    }
    else {
        res.send("Username or password incorrect");
    }
};
exports.createToken = createToken;
