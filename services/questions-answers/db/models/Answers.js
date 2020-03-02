const AnswersModel = (db, SQL) => {
  const Answers = db.define(
    "answers",
    {
      id: {
        type: SQL.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      answer_body: {
        type: SQL.TEXT,
        allowNull: false
      },
      answer_date: {
        type: SQL.DATE,
        default: Date.now,
        as: "date"
      },
      answerer_name: {
        type: SQL.STRING(128),
        allowNull: false
      },
      answerer_email: {
        type: SQL.STRING(128),
        allowNull: false,
        validate: { isEmail: true }
      },
      helpfulness: {
        type: SQL.INTEGER,
        defaultValue: 0
      },
      reported: {
        type: SQL.INTEGER,
        defaultValue: 0
      },
      question_id: {
        type: SQL.INTEGER,
        allowNull: false,
        references: {
          model: "questions",
          key: "id"
        }
      }
    },
    {}
  );
  return Answers;
};

export default AnswersModel;
