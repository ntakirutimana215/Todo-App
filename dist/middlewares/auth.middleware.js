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
exports.checkUserLoggedIn = void 0;
const jwtUtils_1 = require("../utils/jwtUtils");
const checkUserLoggedIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield (0, jwtUtils_1.checkToken)(req);
        if (!token) {
            return res.status(401).json({ message: "Please log in" });
        }
        let decoded;
        try {
            decoded = (0, jwtUtils_1.decodeToken)(token);
        }
        catch (error) {
            return res.status(401).json({
                message: "Invalid token",
            });
        }
        req.user = decoded;
        return next();
    }
    catch (error) {
        return res.status(500).json({
            message: "Unauthorized",
        });
    }
});
exports.checkUserLoggedIn = checkUserLoggedIn;
