#!/bin/bash

API="http://localhost:5003/qa"
QUESTION_ID="999"
BODY="This is a test question?"
NAME="Test User"
EMAIL="test_user@test.com"

# Add a Question - /qa/:product_id

curl -X POST \
-H "Content-Type: application/json" \
"$API/$QUESTION_ID" \
-d @- << EOF
{
  "body": "$BODY",
  "name": "$NAME",
  "email": "$EMAIL"
}
EOF
