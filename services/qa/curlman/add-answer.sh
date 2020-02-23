#!/bin/bash

API="http://localhost:5003/qa"
QUESTION_ID="5"
BODY="This is a test question?"
NAME="Test User"
EMAIL="test_user@test.com"
PHOTOS="[]"

# Add an Answer
# Adds an answer for the given question
curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:5003/qa/1/answers" \
-d @- << EOF 
{
  "body": "This is a test answer",
  "name": "Test Answer",
  "email": "test_answer@test.com",
  "photos": []
}
EOF
