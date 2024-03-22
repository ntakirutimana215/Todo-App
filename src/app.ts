import express, { Request, Response } from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import todoRoutes from "./routes/todoRoutes";

const app = express();
const port: number = 3000;

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://ntakirutimana12:eRfA1roFvhPzn1fo@cluster0.uwcnffe.mongodb.net/todo-db"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => console.log(error));

app.use("/user", userRoutes);
app.use("/todo", todoRoutes);

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

export default app;
