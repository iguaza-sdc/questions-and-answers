const ProductsModel = (db, SQL) => {
  const Products = db.define("products", {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: SQL.STRING(128),
      allowNull: false
    },
    slogan: {
      type: SQL.STRING(255),
      allowNull: false
    },
    description: {
      type: SQL.TEXT,
      allowNull: false
    },
    category: {
      type: SQL.STRING(255),
      allowNull: false
    },
    default_price: {
      type: SQL.FLOAT,
      allowNull: false
    }
  });
  return Products;
};

export default ProductsModel;
