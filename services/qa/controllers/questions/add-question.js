import { Questions, Answers, AnswerPhotos } from "../../db";

/**
 * Add a Question
 * POST /qa/:product_id
 */
export const addQuestion = (req, res) => {
  Questions.create({
    question_body: req.body.body,
    asker_name: req.body.name,
    asker_email: req.body.email,
    product_id: req.params.product_id
  })
    .then((question) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
};
