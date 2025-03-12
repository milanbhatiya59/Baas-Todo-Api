import mongoose, { Document, Schema } from "mongoose";

interface TodoProps extends Document {
  userId: Schema.Types.ObjectId;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: string;
}

const todoSchema = new Schema<TodoProps>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model<TodoProps>("Todo", todoSchema);
export { TodoProps };
