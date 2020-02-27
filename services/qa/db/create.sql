CREATE DATABASE qa_dev;


CREATE DATABASE qa_test;


CREATE DATABASE qa_prod;


CREATE DATABASE qa_stage;

 /*
    SCHEMA: QA-DB;
*/ /*
    PRODUCTS
*/
CREATE TABLE products ( product_id integer, name varchar(255), slogan varchar(255), description text, category varchar(255), default_price double PRECISION, array);

 /*
    FEATURES
*/
CREATE TABLE features ( feature_id integer, product_id integer, feature varchar(128), value varchar(128));

 /*
    STYLES
*/
CREATE TABLE styles ( style_id integer, product_id integer, name varchar(64), sale_price double PRECISION, original_price double PRECISION, default_style integer);

 /*
    REVIEWS
*/
CREATE TABLE reviews ( review_id integer, rating integer, date TIMESTAMP WITH time ZONE DEFAULT CURRENT_TIMESTAMP, summary varchar(255), body text, recommend boolean, reported boolean, reviewer_name varchar(255), reviewer_email varchar(255), response text, helpfulness integer, product_id integer);

 /*
    REVIEW_PHOTOS
*/
CREATE TABLE review_photos ( photo_id integer, review_id integer, url text);

 /*
    QUESTIONS
*/
CREATE TABLE questions ( question_id integer, question_body text, question_date TIMESTAMP WITH time ZONE DEFAULT CURRENT_TIMESTAMP, asker_name varchar(255), asker_email varchar(255), helpfulness integer, reported integer, product_id int);

 /*
    ANSWERS
*/
CREATE TABLE answers ( answer_id integer, answer_body text, answer_date TIMESTAMP WITH time ZONE, answerer_name varchar(64), answerer_email varchar(64), helpfulness integer, reported integer, question_id integer);

 /*
    CHARACTERISTICS
*/
CREATE TABLE CHARACTERISTICS ( characteristic_id integer, product_id integer, name varchar(64));

 /*
    CHARACTERISTICS_REVIEWS
*/
CREATE TABLE characteristics_reviews ( id integer, characteristics_id integer, review_id integer);


CREATE TABLE skus ( sku_id integer, style_id integer, SIZE varchar(64), quantity integer);

 /*
    RELATED
*/
CREATE TABLE related ( related_id integer, current_product_id integer, related_product_id integer);

 /*
    COPY DATA DUMP COMMANDS
    - [ ] questions
    - [ ] reviews
    - [ ] characteristics
    - [ ] skus
    - [ ] related
*/ 
COPY questions
FROM '/Users/jarrodchung/app-data/etl/questions.csv' DELIMITER ',' csv header;

 COPY reviews
FROM '/Users/jarrodchung/app-data/etl/reviews_etl.csv' DELIMITER ',' csv header;

 COPY CHARACTERISTICS
FROM '/Users/jarrodchung/app-data/etl/characteristics_etl.csv' DELIMITER ',' csv header;

 COPY skus
FROM '/Users/jarrodchung/app-data/etl/skus_etl.csv' DELIMITER ',' csv header;

 COPY related
FROM '/Users/jarrodchung/app-data/etl/related_etl.csv' DELIMITER ',' csv header;

 /*
    REMOVING NULL REFERENCES FOREIGN KEYS
    - [ ] questions
    - [ ] answer_id
    - [ ] product_id
*/
DELETE
FROM questions
WHERE NOT EXISTS
    ( SELECT question_id
     FROM products
     WHERE products.product_id = questions.product_id) 

/*
    REMOVE ANSWERS WITH NULL REFERENCES
*/
SELECT answer_id
  FROM answers WHERE NOT EXISTS
    ( SELECT answer_id
     FROM answer_photos
     WHERE answers.answer_id = answer_photos.answer_id);

 /*
    REMOVE PRODUCTS WITH NULL REFERENCES
*/
SELECT product_id
FROM questions
WHERE product_id NOT IN
    ( SELECT product_id
     FROM products
     WHERE products.product_id = questions.product_id);

 /*
    Features belong to a single product, and if the product
    is no longer in the products table, then they are no
    longer needed as accessible data points.
    DELETE 29;
*/
SELECT product_id
FROM features
WHERE NOT EXISTS
    ( SELECT product_id
     FROM products
     WHERE products.product_id = features.product_id);

 /*
    FEATURES
*/
DELETE
FROM features
WHERE NOT EXISTS
    ( SELECT product_id
     FROM products
     WHERE products.product_id = features.product_id);

 /*
    ADD PRIMARY KEY OR UNIQUE CONSTRAINTS
    - [ ] products
    - [ ] questions
*/
ALTER TABLE products ADD CONSTRAINT product_id PRIMARY KEY (product_id);

 -- ANSWERS PRIMARY KEY

ALTER TABLE answers ADD CONSTRAINT answers_id PRIMARY KEY (answer_id);

 -- CHARACTERISTICS PRIMARY KEY

ALTER TABLE 'characteristics' ADD CONSTRAINT characteristics_id PRIMARY KEY (characteristic_id);

 -- MOCKING SERIAL KEY
-- PRODUCTS

CREATE sequence products_product_id_seq START max(products.product_id) owned BY products.product_id;


ALTER TABLE products
ALTER COLUMN product_id
SET DEFAULT nextval('products_product_id_seq');

 -- ANSWERS

CREATE sequence answers_answer_id_seq START max(answers.answer_id) owned BY answers.answer_id;


ALTER TABLE answers
ALTER COLUMN answer_id
SET DEFAULT nextval('products_product_id_seq');

 -- FEATURES PRIMARY KEY

ALTER TABLE -- PRODUCTS PRIMARY KEY
 -- QUESTIONS PRIMARY KEY
 -- RELATED PRIMARY KEY
 -- REVIEWS PHOTOS PRIMARY KEY
 -- SKUS PRIMARY KEY
 -- STYLES PRIMARY KEY
 /*
    CONSTRAINTS:
    * [ ] Questions.belongsTo(Product)
    * [ ] Product.hasMany(Questions)
    * questions.product_id = products.product_id;
*/
ALTER TABLE questions ADD CONSTRAINT product_id
FOREIGN KEY (product_id) REFERENCES products (product_id);

