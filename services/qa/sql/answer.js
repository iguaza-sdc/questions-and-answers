const AnswerModel = (sequelize, Sequelize) => {
  const Answer = sequelize.define(
    "answers",
    {
      answer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      answer_body: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      answer_date: {
        type: Sequelize.DATE,
        defaultValue: Date.now
      },
      answerer_name: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      answerer_email: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      helpfulness: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      reported: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      question_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "questions",
          key: "question_id"
        }
      }
    },
    {}
  );
  return Answer;
};

export default AnswerModel;
