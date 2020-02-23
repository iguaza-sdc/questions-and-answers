import { Question, Answer, Photo } from "../sql";
import sequelize from "sequelize";
import db from "../sql";

const Op = sequelize.Op;

/**
 * [Questions List]
 * [[Parameters]]
 * product_id: specifies the product for which to retrieve questions.
 * page: Selects the page of reults. Default 1.
 * count: Specifies how many results per page to return. Default 5.
 */
export const getQuestions = (req, res) => {
  let page = req.query.page || 1;
  let count = req.query.count || 5;

  // db.query(
  //   `
  //   select * from questions
  //   where product_id = ${req.params.product_id}
  //   and reported < 1;
  // `
  // )
  //   .then((questions) => {
  //     console.log(questions);
  //     res.status(200).send(questions);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  Question.findAll({
    where: {
      product_id: req.params.product_id,
      reported: 0
    }
  })
    .then((questions) => {
      res.status(200).send(questions);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

/**
 * [Add a Question]
 * [[Parameters]]:
 * product_id: Required ID of the product to post the question for
 * [[Body Parameters]]
 * body: Text of question being asked
 * name: Username for question asker
 * email: Email address for question asker
 */
export const addQuestion = (req, res) => {
  Question.findOrCreate({
    where: {
      product_id: req.params.product_id,
      question_body: req.body.body,
      asker_name: req.body.name,
      asker_email: req.body.email
    }
  })
    .then((question) => {
      res.status(201).send(question);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(401);
    });
};

/**
 * [Mark Question as Helpful]
 * [[Parameters]]
 * question_id: Required ID of the question to update
 */
export const markQuestionAsHelpful = (req, res) => {
  let question_id = req.params.question_id;
  Question.findOne({ where: { question_id } })
    .then((question) => {
      return question.increment(["helpfulness"], { by: 1 });
    })
    .then((question) => {
      console.log(question.dataValues);
      res.status(204).send("NO CONTENT");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Error: Couldn't find question.");
    });
};

/**
 * [Report Question]
 * [[Parameters]]
 * question_id: Required ID of the question to update
 */
export const reportQuestion = (req, res) => {
  let question_id = req.params.question_id;
  Question.findOne({ where: { question_id } })
    .then((question) => {
      return question.increment(["reported"], { by: 1 });
    })
    .then((question) => {
      console.log(question.dataValues);
      res.status(204).send("NO CONTENT");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Error: Couldn't report this question.");
    });
};
