const ReviewPhotoModel = (sequelize, Sequelize) => {
  const ReviewPhoto = sequelize.define("review_photos", {
    photo_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    url: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    review_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "reviews",
        key: "review_id"
      }
    }
  });
  return ReviewPhoto;
};

export default ReviewPhotoModel;
