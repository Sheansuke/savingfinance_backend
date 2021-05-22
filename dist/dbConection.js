"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConection = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var chalk_1 = __importDefault(require("chalk"));
// MONGOOSE
var dbConection = function (URI) {
    return mongoose_1.default
        .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
        .then(function () { return console.log(chalk_1.default.green("Database Connected")); })
        .catch(function (error) {
        console.log(chalk_1.default.yellow(error));
        console.log(chalk_1.default.red("Database can't connected"));
    });
};
exports.dbConection = dbConection;
