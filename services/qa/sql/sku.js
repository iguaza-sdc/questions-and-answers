const SkuModel = (sequelize, Sequelize) => {
  const Sku = sequelize.define(
    "skus",
    {
      style_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      size: {
        type: Sequelize.STRING(8),
        allowNull: false,
        validate: { isUpperCase: true }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    {}
  );
  return Sku;
};

export default SkuModel;
