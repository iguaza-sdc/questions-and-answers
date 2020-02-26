const StyleModel = (sequelize, Sequelize) => {
  const Style = sequelize.define("styles", {
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
      }
    },
    name: {
      type: Sequelize.STRING(64),
      allowNull: false
    },
    sale_price: {
      type: Sequelize.FLOAT
    },
    original_price: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    default_style: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });
  return Style;
};

export default StyleModel;
