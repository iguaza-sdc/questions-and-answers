import express from "express";
import sql from "../sql";
import { Question, Answer, Photo } from "../sql";

import {
  getAnswers,
  addAnswer,
  markAnswerAsHelpful,
  reportAnswer
} from "../controllers/answers.js";

const router = express.Router();

/**
 * [Answers List]
 * Returns list of answers, excluding those that are reported
 */
router.get("/qa/:question_id/answers", getAnswers);

/**
 * [Add an Answer]
 * Adds an answer for the question ID.
 */
router.post("/qa/:question_id/answers", addAnswer);

/**
 * [Mark Answer as Helpful]
 * Updates an answer to show it was helpful.
 */
router.put("/qa/answer/:answer_id/helpful", markAnswerAsHelpful);

/**
 * [Report Answer]
 * Updates an answer to show it has been reported.
 * This action does not delete the answer, but the answer will
 * not be returned in subsequent GET requests for answers.
 */
router.put("/qa/answer/:answer_id/report", reportAnswer);

export default router;
