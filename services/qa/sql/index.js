import Sequelize from "sequelize";

let DATABASE_URL;
if (process.env.NODE_ENV === "development") {
  DATABASE_URL = process.env.DATABASE_DEV_URL;
} else if (process.env.NODE_ENV === "production") {
  DATABASE_URL = process.env.DATABASE_URL;
}

const sequelize = new Sequelize(DATABASE_URL, {
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
