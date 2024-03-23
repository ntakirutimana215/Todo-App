"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = require("../controllers/todoController");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const todoRoutes = express_1.default.Router();
todoRoutes.post("/", auth_middleware_1.checkUserLoggedIn, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, todoController_1.createTodo)(req, res);
}));
todoRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, todoController_1.findAll)(req, res);
}));
todoRoutes.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, todoController_1.findTodo)(req, res);
}));
todoRoutes.patch("/:id", auth_middleware_1.checkUserLoggedIn, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, todoController_1.updateOneTodo)(req, res);
}));
todoRoutes.delete("/:id", auth_middleware_1.checkUserLoggedIn, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, todoController_1.deleteOneTodo)(req, res);
}));
exports.default = todoRoutes;
