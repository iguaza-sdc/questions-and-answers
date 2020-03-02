import { Questions, Answers, AnswerPhotos } from "../../db";

/**
 * Mark Answer Helpful
 * PUT /qa/answer/:answer_id/helpful
 */
export const markAnswerHelpful = (req, res) => {
  let answer_id = req.params.answer_id;
  Answers.findOne({ where: { id: answer_id } })
    .then((answer) => {
      return answer.increment(["helpfulness"], { by: 1 });
    })
    .then((answer) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
};
