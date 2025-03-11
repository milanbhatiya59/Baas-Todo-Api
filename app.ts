import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { CORS_ORIGIN } from "./constants";

const app = express();

app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import

import userRouter from "./routes/user.routes";

//routes declaration
app.use("/api/v1/users", userRouter);

export { app };
