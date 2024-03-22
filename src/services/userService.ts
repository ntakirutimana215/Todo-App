import User from "../models/user";

export const createUser = async (data: any) => {
  return await User.create(data);
};

export const findAllUsers = async () => {
  return await User.find();
};

export const findOne = async (id: string) => {
  return await User.findById(id);
};

export const findByEmail = async (email: string) => {
  return await User.findOne({
    email: email,
  });
};
