import express from "express";
import { Feature } from "../sql";

const router = express.Router();

router.post("/features/:product_id", (req, res) => {
  Feature.create({
    product_id: req.params.product_id,
    feature: req.body.feature,
    value: req.body.value
  })
    .then((feature) => {
      res.status(201).send(feature);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

router.get("/features/:product_id", (req, res) => {
  Feature.findAll({
    where: {
      product_id: req.params.product_id
    }
  })
    .then((feature) => {
      res.status(200).send(feature);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

export default router;
