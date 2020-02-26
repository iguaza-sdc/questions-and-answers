const ProductModel = (sequelize, Sequelize) => {
  const Product = sequelize.define(
    "products",
    {
      product_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      slogan: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      category: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      default_price: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    },
    {}
  );
  return Product;
};

export default ProductModel;
