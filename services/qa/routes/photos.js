import express from "express";
import { AnswerPhoto } from "../sql";

const router = express.Router();

router.get("/photos/:photo_id", (req, res) => {
  AnswerPhoto.findAll({
    where: req.params.photo_id
  })
    .then((photo) => {
      res.status(200).send(photo);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

router.post("/photos/:answer_id", (req, res) => {
  AnswerPhoto.create({
    photo_id: req.body.id,
    url: req.body.url,
    thumbnail_url: req.body.thumbnail_url,
    answer_id: req.params.answer_id
  })
    .then((photo) => {
      res.status(201).send(photo);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

export default router;
