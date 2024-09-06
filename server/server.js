import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import mongoDbConnection from "./mongodb.js";
import exsystemRoutes from "./routes/exsystem.route.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const { PORT } = process.env;

app.use("/api/externalSystem", exsystemRoutes);

app.listen(PORT, () => {
  mongoDbConnection();
  console.log(`Listening to port: ${PORT}`);
});
