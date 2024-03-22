import { Request, Response } from "express";
import {
  createUser,
  findAllUsers,
  findByEmail,
  findOne,
} from "../services/userService";
import { makeToken } from "../utils/jwtUtils";

export const create = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const user = await findByEmail(email);

    if (user) {
      return res.status(409).json({
        message: "User email taken",
      });
    }

    const newUser = await createUser(req.body);
    return res.status(201).json({
      message: "User created",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unknown Error",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await findByEmail(email);

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

    const token = makeToken({
      id: user._id,
      email: user.email,
    });
    return res.status(200).json({
      message: "Login successful",
      token: token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unknown Error",
    });
  }
};

export const findAll = async (req: Request, res: Response) => {
  try {
    const users = await findAllUsers();

    return res.status(201).json({
      message: "All users",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unknown Error",
    });
  }
};

export const findOneUser = async (req: Request, res: Response) => {
  try {
    console.log(req);
    const { id } = req.params;
    const user = await findOne(id);

    return res.status(201).json({
      message: "one user",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unknown Error",
    });
  }
};
