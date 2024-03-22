import express, { Request, Response } from "express";
import {
  create,
  findAll,
  findOneUser,
  login,
} from "../controllers/userController";

const userRoutes = express.Router();

userRoutes.post("/", async (req: Request, res: Response) => {
  return create(req, res);
});

userRoutes.post("/login", async (req: Request, res: Response) => {
  return login(req, res);
});

userRoutes.get("/", async (req: Request, res: Response) => {
  return findAll(req, res);
});

userRoutes.get("/:id", async (req: Request, res: Response) => {
  return findOneUser(req, res);
});

export default userRoutes;
