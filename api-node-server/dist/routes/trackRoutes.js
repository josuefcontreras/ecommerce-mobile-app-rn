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
const middlewares_1 = require("../middlewares");
const Track = mongoose_1.default.model("Track");
const tracksRouter = express_1.default.Router();
tracksRouter.use(middlewares_1.requireAuth);
tracksRouter.get("/tracks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id: userId } = req.user;
    const tracks = yield Track.find({ userId });
    res.send(tracks);
}));
tracksRouter.post("/tracks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, locations } = req.body;
    const { user } = req;
    if (!name || !locations) {
        return res
            .status(422)
            .send({ error: "You must provide a name and location." });
    }
    try {
        const track = new Track({ userId: user._id, name, locations });
        const r = yield track.save();
        res.send({ response: r });
    }
    catch (error) {
        console.log(error);
        res.send({ message: "Something went wrong while saving track." });
    }
}));
exports.default = tracksRouter;
//# sourceMappingURL=trackRoutes.js.map