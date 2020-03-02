import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import logger from "morgan";
import router from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

/**
 * Express Middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(logger("dev"));

/**
 * Routes found in /routes
 */
app.use(router);

/**
 * Port
 */
app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

export default app;
