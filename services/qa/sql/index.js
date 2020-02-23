import Sequelize from "sequelize";

const sequelize = new Sequelize("postgres://localhost:5432/qa", {
  dialect: "postgres",
  logging: console.log,
  define: {
    timestamps: false
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Sequelize authenticated!");
  })
  .catch((err) => console.log(err));

export default sequelize;
