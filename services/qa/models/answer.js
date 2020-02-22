import mongoose, { Schema } from "mongoose";

const Answer = new Schema({
  answer_id: Number,
  body: { type: String, min: 50, max: 5000 }
});
