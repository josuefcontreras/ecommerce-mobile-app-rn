import express from "express";
import mongoose from "mongoose";
import { requireAuth } from "../middlewares";

const Track = mongoose.model("Track");

const tracksRouter = express.Router();

tracksRouter.use(requireAuth);

tracksRouter.get("/tracks", async (req, res) => {
  const { _id: userId } = req.user;
  const tracks = await Track.find({ userId });
  res.send(tracks);
});

tracksRouter.post("/tracks", async (req, res) => {
  const { name, locations } = req.body;
  const { user } = req;

  if (!name || !locations) {
    return res
      .status(422)
      .send({ error: "You must provide a name and location." });
  }
  try {
    const track = new Track({ userId: user._id, name, locations });
    const r = await track.save();
    res.send({ response: r });
  } catch (error) {
    console.log(error);
    res.send({ message: "Something went wrong while saving track." });
  }
});

export default tracksRouter;
