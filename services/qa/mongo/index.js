import mongoose, { Schema } from "mongoose";
import autoincrementer from "mongoose-sequence";
const uri = "mongodb://localhost:27017/qa";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;
const autoincrement = autoincrementer(db);

const QuestionSchema = new Schema(
  {
    _id: { type: Number, index: true, unique: true },
    question_body: { type: String, required: true },
    question_date: { type: Date, default: Date.now },
    asker_name: { type: String, required: true },
    asker_email: { type: String, required: true },
    helpfulness: { type: Number, default: 0 },
    reported: { type: Number, default: 0 },
    product_id: { type: Number, required: true },
    answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }]
  },
  {
    collection: "questions",
    virutals: true,
    strict: true,
    writeConcern: {
      w: "majority",
      j: true,
      wTimeout: 1000
    }
  }
);

QuestionSchema.virtual("question_id").get(() => {
  return this._id;
});
QuestionSchema.virtual("question_id").set((id) => {
  this._id = id;
});

const AnswerSchema = new Schema(
  {
    _id: { type: Number, index: true, unique: true },
    question_id: { type: Number, required: true, ref: "Question" },
    answerer_name: { type: String, required: true },
    answerer_email: { type: String, required: true },
    body: { type: String },
    date: { type: Date, default: Date.now },
    helpfulness: { type: Number, default: 0 },
    reported: { type: Number, default: 0 },
    photos: [{ type: Schema.Types.ObjectId, ref: "Photo" }]
  },
  {
    collection: "answers",
    strict: true,
    writeConcern: {
      w: "majority",
      j: true,
      wTimeout: 1000
    }
  }
);

AnswerSchema.virtual("answer_id").get(() => {
  return this._id;
});

const PhotosSchema = new Schema(
  {
    photo_id: { type: Number, createIndex: true },
    url: { type: String, required: true },
    thumbnail_url: { type: String, required: true }
  },
  {
    collection: "photos",
    strict: true,
    writeConcern: {
      w: "majority",
      j: true,
      wTimeout: 1000
    }
  }
);

export const Question = mongoose.model("Question", QuestionSchema);
export const Answer = mongoose.model("Answer", AnswerSchema);
export const Photo = mongoose.model("Photo", PhotosSchema);

export default db;
