"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../models");
const User = mongoose_1.default.model("User");
const authRouter = express_1.default.Router();
authRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = new User({ email, password });
        yield user.save();
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, "MY_SECRET_KEY");
        res.send({ token, user: new models_1.ClientUser(user) });
    }
    catch (error) {
        console.warn(error.message);
        res.status(422).send("Something went wrong!");
    }
}));
authRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).send({ error: "Please, provide credentials!" });
    }
    try {
        const user = yield User.findOne({ email });
        if (!user)
            return res
                .status(404)
                .send({ error: "Please, provide valid credentials!" });
        const isMath = yield user["comparePassword"](password);
        if (!isMath)
            return res
                .status(404)
                .send({ error: "Please, provide valid credentials!" });
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, "MY_SECRET_KEY");
        res.send({ token, user: new models_1.ClientUser(user) });
    }
    catch (error) {
        return res
            .status(404)
            .send({ error: "Please, provide valid credentials!" });
    }
}));
exports.default = authRouter;
//# sourceMappingURL=authRoutes.js.map