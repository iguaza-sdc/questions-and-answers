#!/bin/bash

API="http://localhost:5003/qa"
QUESTION_ID="5"
BODY="This is a test question?"
NAME="Test User"
EMAIL="test_user@test.com"

# Add a Question - /qa/:product_id

curl -X PUT -H "Content-Type: application/json" "$API/question/$QUESTION_ID/helpful"


