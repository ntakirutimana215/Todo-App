"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
mongoose_1.default
    .connect("mongodb+srv://ntakirutimana12:eRfA1roFvhPzn1fo@cluster0.uwcnffe.mongodb.net/todo-db")
    .then(() => {
    console.log("database connected");
})
    .catch((error) => console.log(error));
app.use("/user", userRoutes_1.default);
app.use("/todo", todoRoutes_1.default);
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});
exports.default = app;
