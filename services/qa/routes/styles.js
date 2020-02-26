import express from "express";
import { Style, Product } from "../sql";

const router = express.Router();

/**
 * [Add a Style]
 * Adds a new style to the database.
 * POST
 */
router.post("/styles/:product_id", (req, res) => {
  console.log(req.params.product_id);
  Style.create({
    product_id: req.params.product_id,
    name: req.body.name,
    sale_price: Number(req.body.sale_price),
    original_price: Number(req.body.original_price),
    default_style: Boolean(req.body.default_style)
  })
    .then((style) => {
      res.status(201).send(style);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(401);
    });
});

export default router;
