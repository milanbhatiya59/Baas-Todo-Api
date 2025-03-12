import mongoose, { Document, Schema } from "mongoose";

interface AdminUserProps extends Document {
  email: string;
}

const adminUserSchema = new Schema<AdminUserProps>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AdminUser = mongoose.model<AdminUserProps>("AdminUser", adminUserSchema);
export { AdminUserProps };
