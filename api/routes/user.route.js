import express from "express";
import { sendindHello } from "../controller/user.controller.js";

const router = express.Router();

router.get("/test", sendindHello);

export default router;
