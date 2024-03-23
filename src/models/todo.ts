import mongoose, { Document, Schema } from "mongoose";

export interface Todo extends Document {
  title: string;
  description: string;
  author: string;
}

const todoSchema = new Schema({
  title: String,
  description: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model<Todo>("Todo", todoSchema);
