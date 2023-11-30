import express from "express";
const router = express.Router();
import { signup, signin } from "../controller/user.controller.js";

router.get("/", (req, res) => {
  res.send({ title: "home" });
});

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
