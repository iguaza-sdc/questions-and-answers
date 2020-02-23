#!/bin/bash

# Add an Answer
# Adds an answer for the given question
# POST /qa/:question_id/answers

QUESTION_ID=1
API="http://localhost:5003/qa/1/answers"
URL="https://m.media-amazon.com/images/I/71L6RjbQi8L._AC_UY436_FMwebp_QL65_.jpg"
THUMBNAIL_URL="https://images-na.ssl-images-amazon.com/images/I/717ptbh4ptL._SL1500_.jpg"

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "body": "You can definitely get away with that but I'd be cautious.",
  "name": "Mr. BigBrain",
  "email": "bigbrain@harvard.edu",
  "photos": [
    {
      "url": "$URL",
      "thumbnail_url": "$THUMBNAIL_URL",
      "answer_id": 1
    }
  ]
}
EOF
