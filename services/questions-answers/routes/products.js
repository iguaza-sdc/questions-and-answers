import express from "express";
import { getProducts } from "../controllers/products/get-products";
import { getProductInformation } from "../controllers/products/get-product-information";

const router = express.Router();

/**
 * List Products
 * GET /products/list
 */
router.get("/products/list", getProducts);

/**
 * Product Information
 * GET /products/:product_id
 */
router.get("/products/:product_id", getProductInformation);

export default router;
