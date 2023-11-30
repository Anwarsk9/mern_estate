import express from "express";
const router = express.Router();
import { saveUser } from "../controller/user.controller.js";

router.get("/", (req, res) => {
  res.send({ title: "home" });
});

router.post("/test", saveUser);

export default router;