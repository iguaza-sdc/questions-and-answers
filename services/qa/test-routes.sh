#!/bin/bash

# Questions and Answers API
API=http://localhost:5000

request=$1

list-questions() {
  curl -X GET "$API/qa/1?page=1&count=5" | pretty
}

answers-list() {
  curl -X GET "$API/qa/1?page=1&count=5" | pretty
}

add-question() {
  curl -X POST -H "Content-Type: application/json" \
  "$API/qa/1/answers" \
  -d '
  {
    "body": "Text of question being asked",
    "name": "Username for questiona asker",
    "email": "Email address for question asker"
  }
  '
}

add-answer() {
  curl -X POST \
  -H "Content-Type: application/json" \
  "$API/qa/1/answers" \
  -d '
  {
    "body": "Text of question being asked",
    "name": "Username for questiona asker",
    "email": "Email address for question asker",
    "photos": ["photo1.jpeg", "photo2.jpeg"]
  }
  '
}

helpful-question() {
  curl -X PUT \
  -H "Content-Type: application/json" \
  "$API/qa/question/1/helpful"
}

report-question() {
  curl -X PUT \
  -H "Content-Type: application/json" \
  "$API/qa/question/1/report"
}

report-answer() {
  curl -X PUT \
  -H "Content-Type: application/json" \
  "$API/qa/answer/:answer_id/report"
}


if [[ "${request}" == "list-questions" ]]; then
  list-questions
elif [[ "${request}" == "answers-list" ]]; then
  answers-list
elif [[ "${request}" == "add-question" ]]; then 
  add-question
elif [[ "${request}" == "helpful-question" ]]; then
  helpful-question
elif [[ "${request}" == "report-question" ]]; then
  report-question
fi
