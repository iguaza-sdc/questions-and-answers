import express from "express";
const router = express.Router();
import db from "../mongo";
import mongoose from "mongoose";
import { Question, Answer, Photo } from "../mongo";

/**
 * [Questions List]
 * GET /qa/:product_id
 * Retrieves a list of questions for a particular product
 * This does not include any reported questions
 */
router.get("/:question_id", (req, res) => {
  let question_id = req.params.question_id;
  let page = req.params.page;
  let count = req.params.count;
  Question.find()
    .then((questions) => {
      res.status(200).json(questions);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

/**
 * [Answers List]
 * Returns answers for a given question.
 * This does not include any reported questions.
 * GET /qa/:question_id/answers
 */
router.get("/:question_id/answers", (req, res) => {
  let question_id = req.params.question_id;
  let page = req.params.page;
  let count = req.params.count;
  Answer.find()
    .then((answers) => {
      res.status(200).json(answers);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

/**
 * [Add Question]
 * Adds a question for the given product
 * POST /qa/:product_id
 */
router.post("/:product_id", (req, res) => {
  let product_id = req.params.product_id;
  let question_body = req.body.body;
  let asker_name = req.body.name;
  let asker_email = req.body.email;
  Question.create({
    product_id: req.params.product_id,
    question_body: req.body.body,
    asker_name: req.body.name,
    asker_email: req.body.email
  })
    .then((question) => {
      res.status(201).send(question);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("Error creating question");
    });
});

// Add an Answer
router.post("/:question_id/answers", (req, res) => {
  Answer.create({
    question_id: req.params.question_id,
    answer_body: req.body.body,
    answerer_name: req.body.name,
    answerer_email: req.body.email,
    photos: req.body.photos
  })
    .then((answer) => {
      res.status(201).send(answer);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
});

// Mark Question Helpful
router.put("/question/:question_id/helpful", (req, res) => {
  Question.findOneAndUpdate({ question_id: req.params.question_id }, (err, question) => {
    console.log(question);
    console.log(question.helpfulness);
    question.helpfulness.$inc();
    question.save();
    return question;
  }).then((question) => {
    res.status(204).send(question);
  });
});

/**
 * [Report Question]
 * Updates a question to show it was reported.
 * Note, this action does not delete the question,
 * but the question will not be retruned in the above
 * GET request.
 * PUT /qa/questions/:question_id/report
 */
router.patch("/question/:question_id/report", (req, res) => {
  let question_id = req.params.question_id;
  db.Question.update({ question_id }, { $inc: { helpfulness: 1 } });
});

/**
 * [Mark Answer as Helpful]
 * Updates an answer to show it was found helpful.
 * PUT /qa/answer/:answer_id/helpful
 */
router.put("/answer/:answer_id/helpful", (req, res) => {
  let answer_id = req.params.answer_id;
  res.status(204).send("Mark Answer as Helpful\n");
});

/**
 * [Report Answer]
 * Updates an answer to show it has been reported.
 * Not this action does not delete the answer but
 * the answer will not be returned in the above GET
 * request.
 * PUT /qa/answer/:answer_id/report
 */
router.put("/qa/answer/:answer_id/report", (req, res) => {
  let answer_id = req.params.answer_id;
  res.status(204).send("Report Answer\n");
});

export default router;
