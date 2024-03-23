"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const todoRoutes_1 = __importDefault(require("./todoRoutes"));
const routes = express_1.default.Router();
routes.use("/user", userRoutes_1.default);
routes.use("/todo", todoRoutes_1.default);
exports.default = routes;
