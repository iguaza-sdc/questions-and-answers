import express from "express";
import sql from "../sql";
import { Product, Feature, Style, Sku, Photo } from "../sql";
import {
  getProducts,
  getProductInformation,
  addProduct,
  getProductStyles,
  getRelatedProducts
} from "../controllers/products";

const router = express.Router();

/**
 * [Products List]
 * Retrieves a list of products
 * GET /products/:product_id
 */
router.get("/products/list", getProducts);

/**
 * [Product Information]
 * Returns all product level information.
 */
router.get("/products/:product_id", getProductInformation);

/**
 * [Product Styles]
 * Returns all styles available for the given products.
 * GET /products/:product_id/styles
 * Photos is not associated with questions
 */
router.get("/products/:product_id/styles", getProductStyles);

/**
 * [Add a Product]
 * Adds a new product to the database.
 * POST /products
 */
router.post("/products", addProduct);

/**
 * [Related Products]
 * Returns the IDs of products to the product specified.
 * GET /products/:product_id/related
 */
router.get("/products/:product_id/related", getRelatedProducts);

export default router;
