#!/bin/bash

# Add an Answer
# Adds an answer for the given question
# POST /qa/:question_id/answers

PORT=5003
QUESTION_ID=1
API="http://localhost:$PORT/qa/1/answers"
URL="https://tinyurl.com/ul43dkj"
THUMBNAIL_URL="https://tinyurl.com/rskjve3"

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "body": "I think it is definitely worth it.",
  "name": "Tim Apple",
  "email": "tim@apple.com",
  "photos": [
    {
      "url": "$URL",
      "thumbnail_url": "$THUMBNAIL_URL",
      "answer_id": 1
    }
  ]
}
EOF
