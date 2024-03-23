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
exports.findOneUser = exports.findAll = exports.login = exports.create = void 0;
const userService_1 = require("../services/userService");
const jwtUtils_1 = require("../utils/jwtUtils");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = yield (0, userService_1.findByEmail)(email);
        if (user) {
            return res.status(409).json({
                message: "User email taken",
            });
        }
        const newUser = yield (0, userService_1.createUser)(req.body);
        return res.status(201).json({
            message: "User created",
            data: newUser,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Unknown Error",
        });
    }
});
exports.create = create;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield (0, userService_1.findByEmail)(email);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        if (password !== user.password) {
            return res.status(401).json({
                message: "Passwords dont match",
            });
        }
        const token = (0, jwtUtils_1.makeToken)({
            id: user._id,
            email: user.email,
        });
        return res.status(200).json({
            message: "Login successful",
            token: token,
            user,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Unknown Error",
        });
    }
});
exports.login = login;
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.findAllUsers)();
        return res.status(201).json({
            message: "All users",
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Unknown Error",
        });
    }
});
exports.findAll = findAll;
const findOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req);
        const { id } = req.params;
        const user = yield (0, userService_1.findOne)(id);
        return res.status(201).json({
            message: "one user",
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Unknown Error",
        });
    }
});
exports.findOneUser = findOneUser;
