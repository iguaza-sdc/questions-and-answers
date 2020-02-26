create table questions (
    questions_id serial primary key,
    question_body text not null,
    question_date timestamp default current_timestamp,
    asker_name varchar(255) not null,
    asker_email varchar(255) not null,
    helpfulness int default 0,
    reported int default 0,
    product_id int not null
);

create table answers (
        
)
