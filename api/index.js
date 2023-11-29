import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use("/user", userRouter);

app.listen("8080", () => {
  console.log("server is running on 8080!!");
});
