import { Products, Questions, Answers, AnswerPhotos } from "../../db";

export const addProduct = (req, res) => {
  Products.create({
    name: req.body.name,
    slogan: req.body.slogan,
    description: req.body.description,
    cateogry: req.body.category,
    default_price: req.body.default_price
  })
    .then((product) => {
      res.status(201).send(product);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};
