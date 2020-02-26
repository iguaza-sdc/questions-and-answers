import { Product, Feature, Style } from "../sql";
import sequelize from "sequelize";

export const getProducts = (req, res) => {
  let page = req.query.page;
  let count = req.query.count;
  Product.findAll({
    inlcude: [Style],
    limit: count
  })
    .then((products) => {
      products["id"] = products["product_id"];
      return products;
    })
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
};

export const getProductInformation = (req, res) => {
  Product.findAll({
    where: { product_id: req.params.product_id },
    include: [
      {
        model: Feature,
        attributes: ["feature", "value"]
      }
    ]
  })
    .then((product) => {
      console.log(product.dataValues);
      res.status(200).send(product);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
};

export const addProduct = (req, res) => {
  Product.create({
    product_id: req.body.product_id,
    name: req.body.name,
    slogan: req.body.slogan,
    description: req.body.description,
    category: req.body.category,
    default_price: req.body.default_price
  })
    .then((product) => {
      res.status(201).send(product);
    })
    .catch((err) => {
      res.sendStatus(401);
    });
};

export const getProductStyles = (req, res) => {
  let product_id = req.params.product_id;
  Product.findAll({
    where: {
      product_id: req.params.product_id
    },
    include: [Style]
  })
    .then((productStyle) => {
      res.status(200).send(productStyle);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

export const getRelatedProducts = (req, res) => {
  let product_id = req.params.product_id;
  res
    .status(200)
    .send(`Here's all the ID s for products related to #${product_id}!`)
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
};
