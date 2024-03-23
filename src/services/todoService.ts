import Todo from "../models/todo";

export const create = async (data: any) => {
  return await Todo.create(data);
};

export const findAllTodos = async () => {
  return await Todo.find();
};

export const findOneTodo = async (id: string) => {
  return await Todo.findById(id);
};

export const findByTitle = async (title: string) => {
  return await Todo.findOne({
    title: title,
  });
};

export const updateTodo = async (id: string, data: any) => {
  return await Todo.findByIdAndUpdate(id, data, { new: true });
};

export const deleteTodo = async (id: string) => {
  return await Todo.findByIdAndDelete(id);
};
