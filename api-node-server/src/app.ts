import "./models/User";
import "./models/Product";

import express from "express";
import { urlencoded, json } from "body-parser";
import { requireAuth } from "./middlewares";

import tracksRouter from "./routes/trackRoutes";
import authRouter from "./routes/authRoutes";

const app = express();
const port = 3000;
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(authRouter);
app.use(tracksRouter);

const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://admin:admin1234@cluster0.xleli.mongodb.net/trackme_bd?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on("connected", () => {
  console.log(">>> Connected to mongo instance...");
});

mongoose.connection.on("error", (e) => {
  console.warn(">>> ERROR HAS OCCURED WHILE CONNECTION TO MONGO INTANCE: ", e);
});

app.get("/", requireAuth, (req, res) => {
  res.json(req.user);
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
