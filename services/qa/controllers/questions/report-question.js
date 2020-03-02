import { Questions, Answers, AnswerPhotos } from "../../db";

/**
 * Report A Question
 * /qa/question/:question_id/report
 */
export const reportQuestion = (req, res) => {
  let question_id = req.params.question_id;
  Questions.findOne({ where: { id: question_id } })
    .then((question) => {
      return question.increment(["reported"], { by: 1 });
    })
    .then((question) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

