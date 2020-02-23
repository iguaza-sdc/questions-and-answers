import express from "express";

import answersRoutes from "./answers";
import questionsRoutes from "./questions";

const router = express.Router();

router.use(questionsRoutes);

router.use(answersRoutes);

export default router;
