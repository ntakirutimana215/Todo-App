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
exports.checkToken = exports.decodeToken = exports.makeToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const expiresIn = "1d";
const secret = "badhjba7eeg7";
const makeToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(Object.assign({}, payload), secret, { expiresIn: expiresIn });
    return token;
};
exports.makeToken = makeToken;
const decodeToken = (token) => {
    return jsonwebtoken_1.default.verify(token, secret);
};
exports.decodeToken = decodeToken;
const checkToken = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
    return token;
});
exports.checkToken = checkToken;
