import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

dotenv.config();

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => {
    console.log(err);
  });

app.use("/user", userRouter);

app.listen("8080", () => {
  console.log("server is running on 8080!!");
});

app.use((err, req, res) => {
  let { status = 500, message = "Internal Server Error!" } = err;
  res.status(status).send(message);
});
