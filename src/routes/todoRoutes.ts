import express, { Request, Response } from "express";
import {
  createTodo,
  deleteOneTodo,
  findAll,
  findTodo,
  updateOneTodo,
} from "../controllers/todoController";
import { checkUserLoggedIn } from "../middlewares/auth.middleware";

const todoRoutes = express.Router();

todoRoutes.post("/", checkUserLoggedIn, async (req: any, res: Response) => {
  return createTodo(req, res);
});

todoRoutes.get("/", async (req: any, res: Response) => {
  return findAll(req, res);
});

todoRoutes.get("/:id", async (req: any, res: Response) => {
  return findTodo(req, res);
});

todoRoutes.patch("/:id", checkUserLoggedIn, async (req: any, res: Response) => {
  return updateOneTodo(req, res);
});

todoRoutes.delete(
  "/:id",
  checkUserLoggedIn,
  async (req: any, res: Response) => {
    return deleteOneTodo(req, res);
  }
);

export default todoRoutes;
