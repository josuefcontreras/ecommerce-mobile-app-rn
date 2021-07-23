import mongoose from "mongoose";

interface Product extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  timestamp: Number;
  title: string;
  description: string;
  image: string;
  images: string[];
  options: string[];
  avgRating: number;
  ratings: number;
  price: number;
  oldPrice?: number;
}

const productSchema = new mongoose.Schema<Product>({
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

mongoose.model<Product>("Product", productSchema);
