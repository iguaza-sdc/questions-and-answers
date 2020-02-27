# WORKFLOW

1. Add a product

2. Add two features

3. Add two styles

4. Add two SKUs

5. Get Product Information
  - product_id AS id
  - name as name
  - slogan as slogan
  - description as description
  - category as category
  - default_price as default_price
  - features
    + feature
    + value

```sql
select
  p.product_id as id,
  p.name,
  p.slogan,
  p.description,
  p.category,
  f.feature,
  f.value
from products as p
join features as f
on p.product_id = f.product_id;
```

```
------------------------------------------------------------------------------------------------
id          | 1
name        | Macbook Pro
slogan      | The best for the brightest.
description | Designed for those who defy limits and change the world...
category    | Computers/Laptops
feature     | CPU
value       | 2.4 GHz Intel Core i9 8-Core
------------------------------------------------------------------------------------------------
id          | 1
name        | Macbook Pro
slogan      | The best for the brightest.
description | Designed for those who defy limits and change the world...
category    | Computers/Laptops
feature     | RAM
value       | 64GB
------------------------------------------------------------------------------------------------
```

6. Get Product Styles
  - product_id => (string) => product_id
  - results => `[{styles}]`
    + style_id
    + name
    + original_price
    + sale_price
    + default_price as default?
    + photos => `[{photos}]`
      * thumbnail_url
      * url
    + skus => `[{skus}]`
      - sku_name
      - sku_name

7. Get Related Products
  - `[...product_id(s)]`


# Questions & Answers

1. Add two questions

2. Add two answers for each question
2. Add two photos for each question

3. Mark one answer helpful

4. Report 1 question

5. Get questions
  - product_id => (string) => "product_id"
  - question_body
  - question_date
  - asker_name
  - question_helpfulness
  - reported
  - answers => (`[{answers}]`)
    + answer_id:
      * answer_id
      * answer_body
      * answer_date
      * answerer_name
      * answer_helpfulness
      * photos => `[{photos}]`
        - thumbnail_url
        - url

6. Answers List
  - question: str(question_id)
  - page: page
  - count: count
  - results => `[{answers}]`
    + answer_id 
    + answer_body => body
    + answer_date => date
    + answerer_name
    + helpfulness
    + photos => `[{photos}]`


# Workflow
1. Use commited GitHub changes as reference for what models should look like AFTER cleaning the data
2. `{force: true}` to clear tables and remove schema constraints, remake them THEN immediately remove `{force: true}`
3. Use `SQL Postico`'s Query Editor to resolve any conflicts that would that would occur if you were to hypothetically put constraints back on to the Sequelize models.
4. When confident that they are compliant, add constraints back in.
