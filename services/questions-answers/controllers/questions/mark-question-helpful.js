import { Questions, Answers, AnswerPhotos } from "../../db";

/**
 * Mark Question Helpful
 * PUT /qa/question/:question_id/helpful
 */
export const markQuestionHelpful = (req, res) => {
  let question_id = req.params.question_id;
  Questions.findOne({ where: { id: req.params.question_id } })
    .then((question) => {
      return question.increment(["helpfulness"], { by: 1 });
    })
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};


