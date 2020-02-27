const AnswerPhotoModel = (sequelize, Sequelize) => {
  const AnswerPhoto = sequelize.define(
    "answer_photos",
    {
      photo_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      url: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      answer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "answers",
          key: "answer_id"
        }
      }
    },
    {}
  );
  return AnswerPhoto;
};

export default AnswerPhotoModel;
