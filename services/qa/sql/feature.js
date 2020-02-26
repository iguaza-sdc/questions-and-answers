const FeatureModel = (sequelize, Sequelize) => {
  const Feature = sequelize.define(
    "features",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "product_id"
        },
        allowNull: false
      },
      feature: {
        type: Sequelize.STRING(128),
        unique: true,
        allowNull: false
      },
      value: {
        type: Sequelize.STRING(128),
        allowNull: false
      }
    },
    {}
  );

  return Feature;
};

export default FeatureModel;
