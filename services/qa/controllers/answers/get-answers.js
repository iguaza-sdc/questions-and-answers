import { Questions, Answers, AnswerPhotos } from "../../db";

/**
 * Answers List
 * GET /qa/:question_id/answers
 * page:
 */
export const getAnswers = (req, res) => {
  let question_id = req.params.question_id;
  let count = req.query.count;
  let page = req.query.page;
  Questions.findAll({
    where: { id: question_id },
    include: [
      {
        model: Answers,
        include: [AnswerPhotos],
        limit: count
      }
    ]
  }).then((questions) => {
    res.status(200).send(
      questions.map((question) => {
        return {
          question: question.id.toString(),
          page: page,
          count: count,
          results: question.answers.map((answer) => {
            return {
              answer_id: answer.id,
              body: answer.answer_body,
              date: answer.answer_date,
              answerer_name: answer.answerer_name,
              helpfulness: answer.helpfulness,
              photos: [...answer.answer_photos]
            };
          })
        };
      })
    );
  });
};
