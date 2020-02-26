const QuestionModel = (sequelize, Sequelize) => {
  const Question = sequelize.define(
    "questions",
    {
      question_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      question_body: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      question_date: {
        type: Sequelize.DATE,
        defaultValue: Date.now
      },
      asker_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      asker_email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      helpfulness: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      reported: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "product_id"
        }
      }
    },
    {}
  );
  return Question;
};

export default QuestionModel;
