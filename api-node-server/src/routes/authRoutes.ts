import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { ClientUser, User } from "../models";

const User = mongoose.model("User");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user.id }, "MY_SECRET_KEY");
    res.send({ token, user: new ClientUser(user as User) });
  } catch (error) {
    console.warn(error.message);
    res.status(422).send("Something went wrong!");
  }
});
authRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: "Please, provide credentials!" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(404)
        .send({ error: "Please, provide valid credentials!" });

    const isMath = await user["comparePassword"](password);
    if (!isMath)
      return res
        .status(404)
        .send({ error: "Please, provide valid credentials!" });

    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token, user: new ClientUser(user as User) });
  } catch (error) {
    return res
      .status(404)
      .send({ error: "Please, provide valid credentials!" });
  }
});
export default authRouter;
