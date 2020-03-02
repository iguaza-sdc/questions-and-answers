import express from "express";
import { Questions, Answers, AnswerPhotos } from "../db";
import { getQuestions } from "../controllers/questions/get-questions";
import { addQuestion } from "../controllers/questions/add-question";
import { markQuestionHelpful } from "../controllers/questions/mark-question-helpful";
import { reportQuestion } from "../controllers/questions/report-question";
const router = express.Router();

/**
 * List Questions
 * GET /qa/:product_id
 */
router.get("/qa/:product_id", getQuestions);

/**
 * Add A Question
 * POST /qa/:product_id
 */
router.post("/qa/:product_id", addQuestion);

/**
 * Mark Question Helpful
 * PUT /qa/question/:question_id/helpful
 */
router.put("/qa/question/:question_id/helpful", markQuestionHelpful);

/**
 * Report Question
 * PUT /qa/question/:question_id/helpful
 */
router.put("/qa/question/:question_id/report", reportQuestion);

export default router;
