import express from "express";
import sql from "../sql";

const router = express.Router();

/**
 * [Questions List]
 * Returns list of questions for a given product_id
 */
router.get("/qa/:product_id", (req, res) => {
  let product_id = req.params.product_id;
  let page = req.query.page;
  let count = req.query.count;
  res.status(200).send([1, 2, 3, 4]);
});

/**
 * [Answers List]
 * Returns list of answers, excluding those that are reported
 */
router.get("/qa/:product_id/answers", (req, res) => {
  let product_id = req.params.product_id;
  let page = req.query.page;
  let count = req.query.count;
  res.status(200).send([1, 2, 3, 4]);
});

/**
 * [Add a Question]
 * Adds question for given product to database.
 */
router.post("/qa/:product_id", (req, res) => {
  let product_id = req.params.product_id;
  let question_body = req.body.body;
  let asker_name = req.body.name;
  let asker_email = req.body.email;
});

/**
 * [Add an Answer]
 * Adds an answer for the question ID.
 */
router.post("/qa/:question_id/answers", (req, res) => {
  let question_id = req.params.question_id;
  let answer_body = req.body.body;
  let answerer_name = req.body.name;
  let answerer_email = req.body.email;
  let photos = req.body.photos;
});

/**
 * [Mark Question as Helpful]
 * Updates a question too show it was found helpful
 */
router.put("/qa/question/:question_id/helpful", (req, res) => {
  let question_id = req.params.question_id;
  res.status(204).send("NO CONTENT");
});

/**
 * [Report Question]
 * Updates a question tos how it was reported.
 * This action does not delete the question, but the question will
 * not be returned in subsequent GET requests for questions.
 */
router.put("/qa/question/:question_id/report", (req, res) => {
  let question_id = req.params.question_id;
  res.status(204).send("NO CONTENT");
});

/**
 * [Mark Answer as Helpful]
 * Updates an answer to show it was helpful.
 */
router.put("/qa/answer/:answer_id/helpful", (req, res) => {
  let answer_id = req.params.answer_id;
  res.status(204).send("NO CONTENT");
});

/**
 * [Report Answer]
 * Updates an answer to show it has been reported.
 * This action does not delete the answer, but the answer will
 * not be returned in subsequent GET requests for answers.
 */
router.put("/qa/answer/:answer_id/report", (req, res) => {
  let answer_id = req.params.answer_id;
  res.status(204).send("NO CONTENT");
});

export default router;
