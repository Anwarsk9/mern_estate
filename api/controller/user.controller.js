import User from "../models/user.model.js";
import bcrypte from "bcryptjs";
import { wrapAsync } from "../utility/wrapAsync.js";
import  ExpressError  from "../utility/ExpressError.js";

export let signup = wrapAsync(async (req, res) => {
  let { username, email, password } = req.body;
  let hashPassword = bcrypte.hashSync(password, 10);
  let newUser = new User({ username, email, password: hashPassword });
  await newUser.save();
  res.status(201).json("User Created Succesfully!");
});

export const signin = wrapAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const validUser = await User.findOne({ email });
  if (!validUser) {
    return next(new ExpressError(404, "user not fount!"));
  }
  const validPassword = bcrypte.compareSync(password, validUser.password);
  if (!validPassword) {
    return next(new ExpressError(401, "Wrong Credentials!"));
  }
  res.status(200).json("Loggin Successfully!")
});
