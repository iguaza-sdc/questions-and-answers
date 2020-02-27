import Sequelize from "sequelize";

const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_DEV_URL = process.env.DATABASE_DEV_URL;

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  logging: console.log,
  define: {
    timestamps: false
  }
});

export const Product = sequelize.import("./product.js");
export const Feature = sequelize.import("./feature.js");
export const Style = sequelize.import("./style.js");
export const Sku = sequelize.import("./sku.js");
export const Question = sequelize.import("./question.js");
export const Answer = sequelize.import("./answer.js");
export const Photo = sequelize.import("./photo.js");
export const Review = sequelize.import("./review.js");

sequelize
  .authenticate()
  .then(() => {
    sequelize
      .sync()
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
        Answer.hasMany(Photo, { foreignKey: "answer_id" });
        Photo.belongsTo(Answer, { foreignKey: "answer_id" });
      });
  })
  .catch((err) => console.log(err));

export default sequelize;
