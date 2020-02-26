import sql, { Question, Answer, Photo } from "../sql";

/**
 * [Answers List]
 * [[Parameters]]
 * question_id: Required ID of the Questions requested
 * page: Selects the page of results to return. Default 1
 * count: Sepcifies how many results per page to return, Default 5.
 */
export const getAnswers = (req, res) => {
  let page = req.query.page || 1;
  let count = req.query.count || 5;

  Answer.findAll({
    where: {
      question_id: req.params.question_id,
      reported: 0
    },
    limit: req.query.count || 5
  })
    .then((answers) => {
      res.status(200).send(answers);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

/**
 * [Add an Answer]
 * [[Parameters]]
 * question_id: Required ID of the question to post the answer for
 * [[Body Parameters]]
 * body: Text of the question being asked
 * name: Username for the question asker
 * email: Email address for the question asker
 * photos: An array of urls corresponding to images to display
 */
export const addAnswer = (req, res) => {
  Answer.findOrCreate({
    where: {
      question_id: req.params.question_id,
      answer_body: req.body.body,
      answerer_name: req.body.name,
      answerer_email: req.body.email
    }
  })
    .then((answer) => {
      res.status(201).send(answer);
    })
    .catch((err) => {
      console.log("This is the error returned to the client", err);
      res.sendStatus(404);
    });
};

/**
 * [Mark Answer as Helpful]
 * [[Parameters]]
 * answer_id: Required ID of the answer to update
 */
export const markAnswerAsHelpful = (req, res) => {
  let answer_id = req.params.answer_id;
  Answer.findOne({ where: { answer_id } })
    .then((answer) => {
      return answer.increment(["helpfulness"], { by: 1 });
    })
    .then((answer) => {
      console.log(answer.dataValues);
      res.status(204).send("NO CONTENT");
    })
    .catch((err) => {
      res.status(404).send("Error:", err);
    });
};

/**
 * [Report Answer]
 * [[Parameters]]
 * answer_id: Required ID of the answer to update
 */
export const reportAnswer = (req, res) => {
  let answer_id = req.params.answer_id;
  Answer.findOne({ where: { answer_id } })
    .then((answer) => {
      return answer.increment(["reported"], { by: 1 });
    })
    .then((answer) => {
      console.log(answer.dataValues);
      res.status(204).send("NO CONTENT");
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};
