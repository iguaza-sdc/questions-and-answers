import express from "express";
const router = express.Router();

/**
 * Product Routes
 */
import productRoutes from "./products";
router.use(productRoutes);

/**
 * Question Routes
 */
import questionRoutes from "./questions";
router.use(questionRoutes);

/**
 * Answer Routes
 */
import answerRoutes from "./answers";
router.use(answerRoutes);

export default router;
