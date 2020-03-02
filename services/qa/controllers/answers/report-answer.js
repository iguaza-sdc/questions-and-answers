import db, { Questions, Answers, AnswerPhotos } from "../../db";

/**
 * Report Answer
 * PUT /qa/answer/:answer_id/report
 */
export const reportAnswer = (req, res) => {
  let answer_id = req.params.answer_id;
  Answers.findOne({ where: { id: answer_id } })
    .then((answer) => {
      return answer.increment(["reported"], { by: 1 });
    })
    .then((answer) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};
