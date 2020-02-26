const ReviewModel = (sequelize, Sequelize) => {
  const Review = sequelize.define(
    "reviews",
    {
      review_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "product_id"
        }
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { min: 1, max: 5 }
      },
      date: {
        type: Sequelize.DATE,
        default: Date.now
      },
      summary: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      recommend: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      reported: {
        type: Sequelize.INTEGER,
        validate: { min: 0, max: 1 },
        defaultValue: 0
      },
      reviewer_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      reviewer_email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      response: {
        type: Sequelize.TEXT
      },
      helpfulness: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    },
    {}
  );
  return Review;
};

export default ReviewModel;
