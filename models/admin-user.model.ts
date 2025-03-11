import crypto from "crypto";
import mongoose, { Schema } from "mongoose";

const adminUserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    accessKey: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

adminUserSchema.methods.generateAccessKey = async function () {
  return await crypto.randomBytes(20).toString("hex");
};

export const AdminUser = mongoose.model("AdminUser", adminUserSchema);
