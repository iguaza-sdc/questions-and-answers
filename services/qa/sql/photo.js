const PhotoModel = (sequelize, Sequelize) => {
  const Photo = sequelize.define(
    "photos",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      url: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      thumbnail_url: {
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
  return Photo;
};

export default PhotoModel;
