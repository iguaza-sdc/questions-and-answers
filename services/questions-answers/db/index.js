import Sequelize from "sequelize";

// const SDC_DATABASE_URL = process.env.SDC_DATABASE_URL;

const db = new Sequelize("postgres://jarrodchung@localhost:5432/qa", {
  logging: console.log,
  define: {
    timestamps: false,
    underscored: true
  }
});

export const Products = db.import("./models/Products");
export const Features = db.import("./models/Features");
export const Photos = db.import("./models/Photos");
export const Questions = db.import("./models/Questions");
export const Answers = db.import("./models/Answers");
export const AnswerPhotos = db.import("./models/AnswerPhotos");

db.authenticate()
  .then(() => {
    db.sync({})
      .then(() => {
        console.log("Database synced!");
      })
      .then(() => {
        return Promise.all([
          Products.hasMany(Questions, { foreignKey: "product_id" }),
          Questions.belongsTo(Products, { foreignKey: "product_id" }),
          Products.hasMany(Features, { foreignKey: "product_id" }),
          Features.belongsTo(Products, { foreignKey: "product_id" }),
          Questions.hasMany(Answers, { foreignKey: "question_id" }),
          Answers.belongsTo(Questions, { foreignKey: "question_id" }),
          Answers.hasMany(AnswerPhotos, { foreignKey: "answer_id" }),
          AnswerPhotos.belongsTo(Answers, { foreignKey: "answer_id" })
        ]);
      })
      .then((relationships) => {
        console.log(relationships);
      })
      .catch((err) => {
        console.log("ASSOCIATION ERROR:", err);
      });
  })
  .catch((err) => console.log(err));

export default db;
