import mongoose, { Schema } from "mongoose";
const uri = `${process.env.SDC_MONGODB_URI}/qa`;

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

db.once("open", () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

const QuestionSchema = new Schema(
  {
    id: { type: Number, index: true },
    question_body: { type: String, minglength: 50, required: true },
    question_date: { type: Date, default: Date.now },
    question_helpfulness: { type: Number, default: 0 },
    reported: { type: Boolean, default: 0 },
    product_id: { type: Number, required: false },
    answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }]
  },
  { collection: "questions" }
);

const AnswerSchema = new Schema(
  {
    answer_id: { type: Number, index: true },
    question_id: { type: Number, required: true },
    body: { type: String, minglength: 50 },
    date: { type: Date, default: Date.now },
    answerer_name: { type: String, required: true },
    helpfulness: { type: Number, default: 0 },
    photos: [{ type: Schema.Types.ObjectId, ref: "Photo" }]
  },
  { collection: "answers" }
);

const PhotosSchema = new Schema(
  {
    photo_id: { type: Number, index: true },
    url: { type: String, required: true },
    thumbnail_url: { type: String, required: true }
  },
  { collection: "photos" }
);

export const Question = mongoose.model("Question", QuestionSchema);
export const Answer = mongoose.model("Answer", AnswerSchema);
export const Photo = mongoose.model("Photo", PhotosSchema);

export default db;

/*

const questionSchema = new Schema({
  id: { type: Number, index: true },
  question_body: { type: String, minlength: 50, required: true },
  question_date: { type: Date, default: Date.now },
  question_helpfulness: { type: Number, default: 0 },
  reported: { type: Boolean, default: 0 },
  product_id: { type: Number, required: false },
  answers: [answerSchema]
});

const answerSchema = new Schema({
  question_id: { type: Number, required: true },
  answer_id: { type: Number, index: true },
  body: { type: String, minlength: 50 },
  date: { type: Date, default: Date.now },
  answerer_name: { type: String, required: true },
  helpfulenss: { type: Number, default: 0 },
  photos: [photoSchema]
});

const photoSchema = new Schema({
  photo_id: { type: Number, index: true },
  url: { type: String, required: true },
  thumbnail_url: { type: String, required: true }
});

const Question = mongoose.model("Question", questionSchema);
const Answer = mongoose.model("Answer", AnswerSchema);
const Photo = mongoose.model("Photo", photoSchema);
*/
