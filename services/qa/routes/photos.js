import express from "express";
import { Photo } from "../sql";

const router = express.Router();

router.get("/photos/:photo_id", (req, res) => {
  Photo.findAll({
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
  Photo.create({
    id: req.body.id,
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
