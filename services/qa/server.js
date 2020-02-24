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
  .sync()
  .then((data) => {
    console.log("Sequelize synced!");
    console.log("host:", data.options.host);
  })
  .then(() => {
    Question.findAll({ where: { question_id: 1 } }).then((questions) => {
      questions.forEach((question) => {
        console.log(question.dataValues);
      });
    });
  })
  .then(() => {
    Answer.findAll({ where: { question_id: 1 } }).then((answers) => {
      answers.forEach((answer) => {
        console.log(answer.dataValues);
      });
    });
  })
  .then(() => {
    Photo.findAll({ where: { answer_id: 1 } }).then((photo) => {
      if (photo.length) {
        console.log(photo.dataValues);
      } else {
        console.log("No matching photos!");
      }
    });
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}!`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

export default app;
