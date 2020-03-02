import { Questions, Answers, AnswerPhotos } from "../../db";

/**
 * List Questions
 * GET /qa/:product_id
 */
export const getQuestions = (req, res) => {
  let product_id = req.params.product_id;
  let page = req.query.count || 1;
  let count = req.query.count || 5;
  Questions.findAll({
    where: { id: product_id },
    include: [{ model: Answers, include: [{ model: AnswerPhotos }], limit: count }]
  })
    .then((questions) => {
      res.status(200).send({
        product_id: product_id.toString(),
        results: [
          questions.map((question) => {
            return {
              question_id: question.question_id,
              question_body: question.question_body,
              question_date: question.question_date,
              asker_name: question.asker_name,
              question_helpfulness: question.helpfulness,
              reported: question.reported,
              answers: question.answers.map((answer) => {
                return {
                  [answer.id]: {
                    id: answer.id,
                    body: answer.answer_body,
                    date: answer.answer_date,
                    answerer_name: answer.answerer_name,
                    helpfulness: answer.helpfulness,
                    photos: [...answer.answer_photos]
                  }
                };
              })
            };
          })
        ]
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
};
