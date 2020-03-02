const FeaturesModel = (db, SQL) => {
  const Features = db.define(
    "features",
    {
      id: {
        type: SQL.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      product_id: {
        type: SQL.INTEGER,
        references: {
          model: "products",
          key: "id"
        }
      },
      feature: {
        type: SQL.STRING(128),
        allowNull: false
      },
      value: {
        type: SQL.STRING(128)
      }
    },
    {}
  );
  return Features;
};

export default FeaturesModel;
