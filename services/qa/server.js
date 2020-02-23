import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import logger from "morgan";
import router from "./routes";
import sequelize from "./sql";
import { Question, Answer, Photo } from "./sql";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger("dev"));
app.use(cors());

app.use("/", router);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Sequelize synced!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

export default app;
