import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  todos: any[];
}

const todoSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});

export default mongoose.model<User>("User", todoSchema);
