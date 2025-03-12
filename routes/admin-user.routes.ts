import { Router } from "express";
import { registerAdminUser } from "../controllers/admin-user.controller";

const router = Router();

router.route("/register").post(registerAdminUser);

export default router;
