import Sequelize from "sequelize";

const sequelize = new Sequelize("postgres://localhost:5432/qa", {
  dialect: "postgres",
  logging: console.log,
  define: {
    timestamps: false
  }
});

export const Question = sequelize.import("./question.js");
export const Answer = sequelize.import("./answer.js");
export const Photo = sequelize.import("./photo.js");

sequelize
  .authenticate()
  .then(() => {
    console.log("Sequelize authenticated!");
  })
  .catch((err) => console.log(err));

export default sequelize;
