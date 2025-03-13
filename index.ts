import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { app } from "./app";
import { PORT } from "./constants";
import connectDB from "./db/index";

connectDB()
  .then(() => {
    app.listen(PORT || 8000, () => {
      console.log(`⚙️ Server is running at : http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed !!! ", err);
  });
