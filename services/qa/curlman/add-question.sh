#!/bin/bash

# Add a Question
# Adds a question for the given product
# POST /qa/:product_id

PRODUCT_ID=1
API="http://localhost:5003/qa/$PRODUCT_ID"

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "body": "Is this durable enough to use outside?",
  "name": "Curious Adventurer",
  "email": "curious_adventurer@test.com"
}
EOF
