"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./models/User");
require("./models/Product");
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const middlewares_1 = require("./middlewares");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = express_1.default();
const port = 3000;
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(body_parser_1.json());
app.use(authRoutes_1.default);
const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://admin:admin1234@cluster0.xleli.mongodb.net/trackme_bd?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
    console.log(">>> Connected to mongo instance...");
});
mongoose.connection.on("error", (e) => {
    console.warn(">>> ERROR HAS OCCURED WHILE CONNECTION TO MONGO INTANCE: ", e);
});
app.get("/", middlewares_1.requireAuth, (req, res) => {
    res.json(req.user);
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map