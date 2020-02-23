import express from "express";
import sql from "../sql";
import { Question, Answer, Photo } from "../sql";

import {
  getQuestions,
  addQuestion,
  markQuestionAsHelpful,
  reportQuestion
} from "../controllers/questions.js";

const router = express.Router();

/**
 * [Questions List]
 * Returns list of questions for a given product_id
 */
router.get("/qa/:product_id", getQuestions);

/**
 * [Add a Question]
 * Adds question for given product to database.
 */
router.post("/qa/:product_id", addQuestion);

/* MARK AS HELPFUL */

/**
 * [Mark Question as Helpful]
 * Updates a question too show it was found helpful
 */
router.put("/qa/question/:question_id/helpful", markQuestionAsHelpful);

/**
 * [Report Question]
 * Updates a question tos how it was reported.
 * This action does not delete the question, but the question will
 * not be returned in subsequent GET requests for questions.
 */
router.put("/qa/question/:question_id/report", reportQuestion);

export default router;
