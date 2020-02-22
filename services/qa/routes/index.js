import express from "express";
const router = express.Router();
import db from "../db";

/**
 * [List Questions]
 * GET /qa/:product_id
 * Retrieves a list of questions for a particular product
 * This does not include any reported questions
 */
router.get("/:question_id", (req, res) => {
  let question_id = req.params.question_id;
  let page = req.params.page;
  let count = req.params.count;

  res.status(200).send("Questions List\n");
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
  console.log("question_id", question_id);
  console.log("page", page);
  console.log("count", count);
  res.status(200).send("Answers List\n");
});

/**
 * [Add Question]
 * Adds a question for the given product
 * POST /qa/:product_id
 */
router.post("/:product_id", (req, res) => {
  let product_id = req.params.product_id;
  let body = req.body.body;
  let name = req.body.name;
  let email = req.body.email;
  console.log("params:", req.params);
  console.log("body:", req.body);
  res.status(201).send("Add a Question\n");
});

/**
 * [Add an Answer]
 * Adds an answer for the given question
 * POST /qa/:question_id/answers
 */
router.post("/:question_id/answers", (req, res) => {
  let question_id = req.params.question_id;
  let body = req.body.body;
  let name = req.body.name;
  let email = req.body.email;
  let photos = req.body.photos;
  res.status(201).send("Add an Answer\n");
});

/**
 * [Mark Question Helpful]
 * Updates a question to show it was found helpful
 * PUT /qa/questions/:question_id/helpful
 */
router.put("/questions/:question_id/helpful", (req, res) => {
  let question_id = req.params.question_id;
  res.status(204).send("Mark Question Helpful\n");
});

/**
 * [Report Question]
 * Updates a question to show it was reported.
 * Note, this action does not delete the question,
 * but the question will not be retruned in the above
 * GET request.
 * PUT /qa/questions/:question_id/report
 */
router.put("/question//:question_id/report", (req, res) => {
  let question_id = req.params.question_id;
  res.status(204).send("Report Question\n");
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
