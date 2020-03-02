import { Questions, Answers, AnswerPhotos } from "../..//db";

/**
 * Add an Answer
 * POST /qa/:question_id/answers
 */
export const addAnswer = (req, res) => {
  let question_id = req.params.question_id;
  Answers.create({
    question_id: question_id,
    answer_body: req.body.body,
    answerer_name: req.body.name,
    answerer_email: req.body.email
  })
    .then((answer) => {
      return AnswerPhotos.bulkCreate(
        req.body.photos.map((photo) => {
          return {
            url: photo.url,
            answer_id: answer.id
          };
        })
      );
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
};
