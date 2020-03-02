import fs from "fs";
import path from "path";
import express from "express";
import cors from "cors";
import logger from "morgan";
import router from "./routes";

const port = process.env.PORT || 5001;

const app = express();

/**
 * Express Middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/**
 * Logging
 */
app.use(logger("dev"));
app.use(
  logger("tiny", {
    stream: fs.createWriteStream("./logs/access.log", { flags: "a" })
  })
);

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
