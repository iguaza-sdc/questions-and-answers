const AnswerPhotosModel = (db, SQL) => {
  const AnswerPhotos = db.define(
    "answer_photos",
    {
      id: {
        type: SQL.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      url: {
        type: SQL.STRING(255),
        allowNull: false
      },
      answer_id: {
        type: SQL.INTEGER,
        allowNull: false,
        references: {
          model: "answers",
          key: "id"
        }
      }
    },
    {}
  );
  return AnswerPhotos;
};

export default AnswerPhotosModel;
