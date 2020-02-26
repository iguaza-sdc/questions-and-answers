import express from "express";
import sql from "../sql";
import { Review } from "../sql";
import {
  getReviews,
  getReviewsMetadata,
  addReview,
  markReviewAsHelpful,
  reportReview
} from "../controllers/reviews";

const router = express.Router();

/**
 * [Reviews List]
 * Returns a list of reviews for a particular product.
 * This list does not include any reported reviews.
 * GET /reviews/:product_id/list
 */
router.get("/reviews/:product_id/list", getReviews);

/**
 * [Get Review Metadata]
 * Returns the review metadata for a given product.
 * GET /reviews/:product_id/meta
 */
router.get("/reviews/:product_id/meta", getReviewsMetadata);

/**
 * [Add A Review]
 * Adds a review for the given product.
 * POST /reviews/:product_id
 */
router.post("/reviews/:product_id", addReview);

/**
 * [Mark Review as Helpful]
 * Updates a review to show it was found helpful.
 * PUT /reviews/helpful/:review_id
 */
router.put("/reviews/helpful/:review_id", markReviewAsHelpful);

/**
 * [Report Review]
 * Updates a review to show it was reported.
 * Note, this action does not delete the review,
 * but the review will not be returned in the
 * above GET request.
 * PUT /reviews/report/:review_id
 */
router.put("/reviews/report/:review_id", reportReview);

export default router;
