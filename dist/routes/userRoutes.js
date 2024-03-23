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
const userController_1 = require("../controllers/userController");
const userRoutes = express_1.default.Router();
userRoutes.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, userController_1.create)(req, res);
}));
userRoutes.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, userController_1.login)(req, res);
}));
userRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, userController_1.findAll)(req, res);
}));
userRoutes.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, userController_1.findOneUser)(req, res);
}));
exports.default = userRoutes;
