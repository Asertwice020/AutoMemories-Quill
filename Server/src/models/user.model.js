import { Schema, model } from "mongoose"
import bcrypt from "bcrypt"

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "User-Name is Required!"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    fullName: {
      type: String,
      required: [true, "Full-Name is Required!"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is Required!"],
      unique: true,
      lowercase: true,
    },

    avatar: {
      type: String, // CLOUDINARY URL
      required: [true, "Avatar is Required!"],
      default: "",
    },

    password: {
      type: String,
      required: [true, "Password is Required!"],
      min: 8,
      max: 25,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Trans-Gender"],
      required: [true, "Gender is Required!"],
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema)
export { User }