FROM postgres:12.1-alpine

ADD create.sql ./docker-entrypoint-initdb.d

RUN psql -U sdcpostgres -q qa_dev -c "copy questions from 'questions.csv' delimiter ',' csv header"

