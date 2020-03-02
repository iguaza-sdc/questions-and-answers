const QuestionsModel = (db, SQL) => {
  const Questions = db.define(
    "questions",
    {
      id: {
        type: SQL.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      question_body: {
        type: SQL.TEXT,
        allowNull: false
      },
      question_date: {
        type: SQL.DATE,
        defaultValue: Date.now,
        allowNull: false
      },
      asker_name: {
        type: SQL.STRING(255),
        allowNull: false
      },
      asker_email: {
        type: SQL.STRING(255),
        allowNull: false
      },
      helpfulness: {
        type: SQL.INTEGER,
        defaultValue: 0
      },
      reported: {
        type: SQL.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      product_id: {
        type: SQL.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "id"
        }
      }
    },
    {}
  );
  return Questions;
};

export default QuestionsModel;
