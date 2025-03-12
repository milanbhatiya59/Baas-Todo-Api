import { AdminUser } from "../models/admin-user.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const registerAdminUser = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email || email.trim() === "") {
    throw new ApiError(400, "email is required");
  }

  const existedAdminUser = await AdminUser.findOne({ email });

  if (existedAdminUser) {
    throw new ApiError(409, "Admin user with email already exist");
  }

  let adminUser;

  try {
    adminUser = await AdminUser.create({ email });
  } catch (error) {
    throw new ApiError(500, "Admin user not created");
  }

  return res.status(201).json(new ApiResponse(200, adminUser, "Admin user created successfully"));
});

export { registerAdminUser };
