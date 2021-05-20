"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
var mainRoutes_1 = require("./mainRoutes/mainRoutes");
var userRoutes_1 = require("./userRoutes/userRoutes");
var categorieRoutes_1 = require("./categorieRoutes/categorieRoutes");
var googleRoutes_1 = require("./googleRoutes/googleRoutes");
var appRoutes = function (app) {
    app.use(mainRoutes_1.mainRoutes);
    app.use(userRoutes_1.userRoutes);
    app.use(categorieRoutes_1.categorieRoutes);
    app.use(googleRoutes_1.googleRoutes);
};
exports.appRoutes = appRoutes;
