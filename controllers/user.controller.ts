import { User } from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const registerUser = asyncHandler(async (req, res) => {
  const { adminId, fullName, email, password } = req.body;

  if ([adminId, fullName, email, password].some((field) => !field || field.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    throw new ApiError(409, "User with email already exist");
  }

  const user = await User.create({ adminId, fullName, email, password });

  const createdUser = User.findById(user._id).select("-password -refreshToken");

  if (!createdUser) {
    throw new ApiError(500, "User not created");
  }

  return res.status(201).json(new ApiResponse(201, createdUser, "User created successfully"));
});

export { registerUser };
