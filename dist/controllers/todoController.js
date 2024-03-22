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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneTodo = exports.updateOneTodo = exports.findTodo = exports.findAll = exports.createTodo = void 0;
const todoService_1 = require("../services/todoService");
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        console.log(req["user"]);
        const userId = req.user.id;
        const todo = yield (0, todoService_1.findByTitle)(title);
        if (todo) {
            return res.status(409).json({
                message: "Todo title taken",
            });
        }
        const newTodo = yield (0, todoService_1.create)({
            title,
            description,
            author: userId,
        });
        return res.status(201).json({
            message: "Todo created",
            data: newTodo,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Unknown Error",
        });
    }
});
exports.createTodo = createTodo;
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield (0, todoService_1.findAllTodos)();
        return res.status(201).json({
            message: "All todos",
            data: todos,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Unknown Error",
        });
    }
});
exports.findAll = findAll;
const findTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req);
        const { id } = req.params;
        const todo = yield (0, todoService_1.findOneTodo)(id);
        return res.status(201).json({
            message: "one todo",
            data: todo,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Unknown Error",
        });
    }
});
exports.findTodo = findTodo;
const updateOneTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const todo = yield (0, todoService_1.findOneTodo)(id);
        if (!todo) {
            return res.status(404).json({
                message: "Todo not found",
            });
        }
        const authorId = todo === null || todo === void 0 ? void 0 : todo.author.toString();
        if (authorId !== userId) {
            return res.status(401).json({
                message: "Only todo owner can do this action",
            });
        }
        const newTodo = yield (0, todoService_1.updateTodo)(id, req.body);
        return res.status(201).json({
            message: "one todo",
            data: newTodo,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Unknown Error",
        });
    }
});
exports.updateOneTodo = updateOneTodo;
const deleteOneTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const todo = yield (0, todoService_1.findOneTodo)(id);
        if (!todo) {
            return res.status(404).json({
                message: "Todo not found",
            });
        }
        const authorId = todo === null || todo === void 0 ? void 0 : todo.author.toString();
        if (authorId !== userId) {
            return res.status(401).json({
                message: "Only todo owner can do this action",
            });
        }
        yield (0, todoService_1.deleteTodo)(id);
        return res.status(201).json({
            message: "Deleted one todo",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Unknown Error",
        });
    }
});
exports.deleteOneTodo = deleteOneTodo;
