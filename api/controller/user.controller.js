import User from "../models/user.model.js";
import bcryptejs from "bcryptjs";
import { wrapAsync } from "../utility/wrapAsync.js";

export let saveUser = wrapAsync(async (req, res) => {
  let { username, email, password } = req.body;
  let hashPassword = bcryptejs.hashSync(password, 10);
  let newUser = new User({ username, email, password: hashPassword });
  await newUser.save();
  res.status(201).json("User Created Succesfully!");
});
