import express from "express";
import { Questions, Answers, AnswerPhotos } from "../db";
import { getAnswers } from "../controllers/answers/get-answers";
import { addAnswer } from "../controllers/answers/add-answer";
import { markAnswerHelpful } from "../controllers/answers/mark-answer-helpful";
import { reportAnswer } from "../controllers/answers/report-answer";

const router = express.Router();

/**
 * Answers List
 * GET /qa/:question_id/answers
 * page:
 */
router.get("/qa/:question_id/answers", getAnswers);

/**
 * Add an Answer
 * POST /qa/:question_id/answers
 */
router.post("/qa/:question_id/answers", addAnswer);

/**
 * Mark Answer Helpful
 * PUT /qa/answer/:answer_id/helpful
 */
router.put("/qa/answer/:answer_id/helpful", markAnswerHelpful);

/**
 * Report Answer
 * PUT /qa/answer/:answer_id/report
 */
router.put("/qa/answer/:answer_id/report", reportAnswer);

export default router;
