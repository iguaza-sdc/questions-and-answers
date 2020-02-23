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
    return Promise.all([
      Question.create({
        question_body: "Is this a question?",
        asker_name: "Test Question",
        asker_email: "test@question.com",
        product_id: "1"
      }),
      Answer.create({
        answer_body: "This is definitely an question.",
        answerer_name: "Test Answer",
        answerer_email: "test@answer.com",
        photos: [],
        question_id: 1
      }),
      Photo.create({
        url:
          "https://cdn-images.threadless.com/threadless-shop/products/9522/1272x920mens-regular-tee_guys_01.jpg?w=1272&h=920",
        thumbnail_url:
          "https://cdn-images.threadless.com/threadless-shop/products/9522/1272x920mens-regular-tee_guys_01.jpg?w=350&h=420",
        answer_id: 1
      })
    ]);
  })
  .then((seeds) => {
    seeds.forEach((seed) => {
      console.log(seed.dataValues);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

export default app;
