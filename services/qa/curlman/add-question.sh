#!/bin/bash

# Add a Question
# Adds a question for the given product
# POST /qa/:product_id

PORT=5001
PRODUCT_ID=1
API="http://localhost:$PORT/qa/$PRODUCT_ID"

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "body": "Should I get the new Macbook Pro?",
  "name": "Apple Fan",
  "email": "apple_fan@test.com"
}
EOF
