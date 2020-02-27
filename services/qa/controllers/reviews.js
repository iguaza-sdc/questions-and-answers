import sql, { Review } from "../sql";

export const getReviews = (req, res) => {
  let product_id = req.params.product_id;
  let page = req.query.page || 1;
  let count = req.query.count || 5;
  let sort = req.query.sort;
  Review.findAll({ where: { product_id } }).then((review) => {
    res.status(200).send(review);
  });
};

export const getReviewsMetadata = (req, res) => {
  let product_id = req.params.product_id;
  Review.findAll({ where: { product_id } })
    .then((review) => {
      const results = {
        product: review.product_id.toString(),
        results: [
          {
            review_id: review.review_id,
            rating: review.rating,
            summary: review.summary,
            recommend: review.recommend,
            response: review.response | "",
            body: review.body,
            date: review.date,
            reviewer_name: review.reviewer_name,
            reviewer_email: review.reviewer_email,
            helpfulness: review.helpfulness,
            photos: []
          }
        ]
      };
      res.status(200).send(results);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
};

export const addReview = (req, res) => {
  let product_id = req.params.product_id;
  Review.create({
    product_id: req.params.product_id,
    rating: req.body.rating,
    summary: req.body.summary,
    body: req.body.body,
    recommend: req.body.recommend,
    reviewer_name: req.body.name,
    reviewer_email: req.body.email
  })
    .then((review) => {
      const photos = [];
      let photo = {
        url: req.body.url,
        thumbnail_url: req.body.thumbnail_url,
        review_id: review.review_id
      };
      photos.push(photo);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
};

export const markReviewAsHelpful = (req, res) => {
  let review_id = req.params.review_id;
  Review.findOne({ where: { review_id } })
    .then((review) => {
      return review.increment(["helpfulness"], { by: 1 });
    })
    .then((review) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

export const reportReview = (req, res) => {
  let review_id = req.params.review_id;
  Review.findOne({ where: { review_id } })
    .then((review) => {
      return review.increment(["reported"], { by: 1 });
    })
    .then((review) => {
      console.log(review.dataValues);
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};
