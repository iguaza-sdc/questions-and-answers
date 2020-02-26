import express from "express";
const router = express.Router();

// Products API
import productsRoutes from "./products";
router.use(productsRoutes);

// Styles API
import stylesRoutes from "./styles";
router.use(stylesRoutes);

// Features API
import featureRoutes from "./features";
router.use(featureRoutes);

// Questions API
import questionsRoutes from "./questions";
router.use(questionsRoutes);

// Answers API
import answersRoutes from "./answers";
router.use(answersRoutes);

// Photos API
import photoRoutes from "./photos";
router.use(photoRoutes);

// Reviews API
import reviewsRoutes from "./reviews";
router.use(reviewsRoutes);

export default router;
