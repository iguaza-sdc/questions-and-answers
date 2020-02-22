import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import logger from "morgan";
import router from "./routes";
import mongoose from "mongoose";
import { Question } from "./db";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger("dev"));
app.use(cors());

app.use("/qa", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

export default app;
