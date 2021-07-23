"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
    },
    options: {
        type: [String],
    },
    avgRating: {
        type: Number,
    },
    ratings: {
        type: Number,
    },
    price: {
        type: Number,
        required: true,
    },
    oldPrice: {
        type: Number,
    },
});
mongoose_1.default.model("Product", productSchema);
//# sourceMappingURL=Product.js.map