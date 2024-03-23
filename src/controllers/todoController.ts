import { Response } from "express";
import {
  create,
  deleteTodo,
  findAllTodos,
  findByTitle,
  findOneTodo,
  updateTodo,
} from "../services/todoService";

export const createTodo = async (req: any, res: Response) => {
  try {
    const { title, description } = req.body;

    console.log(req["user"]);

    const userId = req.user.id;
    const todo = await findByTitle(title);

    if (todo) {
      return res.status(409).json({
        message: "Todo title taken",
      });
    }

    const newTodo = await create({
      title,
      description,
      author: userId,
    });
    return res.status(201).json({
      message: "Todo created",
      data: newTodo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Unknown Error",
    });
  }
};

export const findAll = async (req: Request, res: Response) => {
  try {
    const todos = await findAllTodos();

    return res.status(201).json({
      message: "All todos",
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unknown Error",
    });
  }
};

export const findTodo = async (req: any, res: Response) => {
  try {
    console.log(req);
    const { id } = req.params;
    const todo = await findOneTodo(id);

    return res.status(201).json({
      message: "one todo",
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unknown Error",
    });
  }
};

export const updateOneTodo = async (req: any, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const todo = await findOneTodo(id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
    const authorId = todo?.author.toString();
    if (authorId !== userId) {
      return res.status(401).json({
        message: "Only todo owner can do this action",
      });
    }

    const newTodo = await updateTodo(id, req.body);

    return res.status(201).json({
      message: "one todo",
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unknown Error",
    });
  }
};

export const deleteOneTodo = async (req: any, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const todo = await findOneTodo(id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
    const authorId = todo?.author.toString();
    if (authorId !== userId) {
      return res.status(401).json({
        message: "Only todo owner can do this action",
      });
    }

    await deleteTodo(id);

    return res.status(201).json({
      message: "Deleted one todo",
    });
  } catch (error) {
    res.status(500).json({
      message: "Unknown Error",
    });
  }
};
