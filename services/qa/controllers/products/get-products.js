import { Products, Questions, Answers, AnswerPhotos } from "../../db";

export const getProducts = (req, res) => {
  let product_id = req.params.product_id;
  let page = req.query.page || 1;
  let count = req.query.count || 5;

  Products.findAll({ limit: count })
    .then((products) => {
      res.status(201).send(
        products.map((product) => {
          return {
            id: product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            default_price: product.default_price
          };
        })
      );
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};
