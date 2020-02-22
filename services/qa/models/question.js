import mongoose, { Schema } from "mongoose";

const QuestionSchema = new Schema({
  question_id: {
    type: Number,
    index: true,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  reported: {
    type: Boolean
  },
  photos: [],
  name: {},
  email: {},
  results: []
});

QuestionSchema.method({});

QuestionSchema.static({});

mongoose.model("Question", QuestionSchema);
