import mongoose from "mongoose";
import bcryp from "bcrypt";

export interface User extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const userSchema = new mongoose.Schema<User>({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcryp.genSalt(10);
    const hash = await bcryp.hash(user["password"], salt);
    user["password"] = hash;
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  try {
    const matched = await bcryp.compare(candidatePassword, user["password"]);
    if (!matched) return false;
    else return true;
  } catch (error) {
    return false;
  }
};

export class ClientUser {
  _id: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;

  constructor(user: User) {
    this._id = user._id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
  }
}
const User = mongoose.model("User", userSchema);
