import Sequelize from "sequelize";

const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_DEV_URL = process.env.DATABASE_DEV_URL;

const sequelize = new Sequelize("postgres://jarrodchung@localhost:5432/qa", {
  dialect: "postgres",
  define: {
    timestamps: false
  }
});

export const Product = sequelize.import("./product");
export const Feature = sequelize.import("./feature");
export const Style = sequelize.import("./style");
export const Sku = sequelize.import("./sku");
export const Question = sequelize.import("./question");
export const Answer = sequelize.import("./answer");
export const AnswerPhoto = sequelize.import("./answer-photo");
export const Review = sequelize.import("./review");
export const ReviewPhoto = sequelize.import("./review-photo");

sequelize
  .authenticate()
  .then(() => {
    sequelize
      .sync({ alter: true })
      .then(() => {
        Product.hasMany(Feature, { foreignKey: "product_id" });
        Feature.belongsTo(Product, { foreignKey: "product_id" });
      })
      .then(() => {
        Product.hasMany(Style, { foreignKey: "product_id" });
        Style.belongsTo(Product, { foreignKey: "product_id" });
      })
      .then(() => {
        Question.hasMany(Answer, { foreignKey: "question_id" });
        Answer.belongsTo(Question, { foreignKey: "question_id" });
      })
      .then(() => {
        Answer.hasMany(AnswerPhoto, { foreignKey: "answer_id" });
        AnswerPhoto.belongsTo(Answer, { foreignKey: "answer_id" });
      })
      .then(() => {
        Review.hasMany(ReviewPhoto, { foreignKey: "review_id" });
        ReviewPhoto.belongsTo(Review, { foreignKey: "review_id" });
      });
  })
  .catch((err) => console.log(err));

export default sequelize;
