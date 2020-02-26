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

/*
"SELECT 
  reviews.id AS review_id, 
  rating, 
  summary, 
  recommend, 
  response, 
  body, 
  date, 
  reviewer_name, 
  helpfulness, 
  (
    SELECT COALESCE(json_agg(photos),
  '[]'
  ) FROM (
    SELECT 
      id, 
      url 
    FROM photos 
    WHERE review_id = reviews.id 
    ORDER BY id ASC
    ) photos
  ) AS photos 
  FROM reviews 
  WHERE id IN (
    SELECT id 
    FROM reviews 
    WHERE product_id = $1 
    AND reported = 0
  ) LIMIT $4";
*/
