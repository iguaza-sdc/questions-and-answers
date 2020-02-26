import express from "express";
import sql from "../sql";
import { Review } from "../sql";

const router = express.Router();

/**
 * Review API
 */

/**
 * [Reviews List]
 * Returns a list of reviews for a particular product.
 * This list does not include any reported reviews.
 * GET /reviews/:product_id/list
 */
router.get("/reviews/:product_id/list", (req, res) => {
  let product_id = req.params.product_id;
  let page = req.params.page;
  let count = req.params.count;
  let sort = req.params.sort;
  console.log(`
    page: ${page}
    count: ${count}
    sort: ${sort}
  `);
  res.status(200).send(`Here's a list of reviews for product_id #${product_id}`);
});

/**
 * [Get Review Metadata]
 * Returns the review metadata for a given product.
 * GET /reviews/:product_id/meta
 */
router.get("/reviews/:product_id/meta", (req, res) => {
  let product_id = req.params.product_id;
  res.status(200).send(`Here's the review metadata for product_id #${product_id}!`);
});

/**
 * [Add A Review]
 * Adds a review for the given product.
 * POST /reviews/:product_id
 */
router.post("/reviews/:product_id", (req, res) => {
  let product_id = req.params.product_id;
  let rating = req.body.rating;
  let summary = req.body.summary;
  let body = req.body.body;
  let recommend = req.body.recommend;
  let name = req.body.name;
  let photos = req.body.photos;
  let characteristics = req.body.characteristics;
  console.log(`
    product_id: ${product_id}
    rating: ${rating}
    summary: ${summary}
    body: ${body}
    recommend: ${recommend}
    name: ${name}
    photos: ${photos}
    characteristics: ${characteristics}
  `);
  res.status(201).send(`Added review for product_id #${product_id}`);
});

/**
 * [Mark Review as Helpful]
 * Updates a review to show it was found helpful.
 * PUT /reviews/helpful/:review_id
 */
router.put("/reviews/helpful/:review_id", (req, res) => {
  let review_id = req.params.review_id;
  res.status(204).send(`Marked review_id #${review_id} helpful!`);
});

/**
 * [Report Review]
 * Updates a review to show it was reported.
 * Note, this action does not delete the review,
 * but the review will not be returned in the
 * above GET request.
 * PUT /reviews/report/:review_id
 */
router.put("/reviews/report/:review_id", (req, res) => {
  let review_id = req.params.review_id;
  res.status(204).send(`Reported review_id #${review_id}!`);
});

export default router;
