#!/bin/bash

# Add a Review
# Adds a review for the given product.
# POST /reviews/:product_id

PORT=5001
PRODUCT_ID=1
API="http://localhost:$PORT/reviews/$PRODUCT_ID?page=1&count=5&sort=helpful"

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "rating": 5,
  "summary": "This is the greatest Macbook Pro ever!",
  "body": "I bought this when it came out and I can safely say that it was the best decision I've ever made.",
  "recommend": true,
  "name": "MacbookLover",
  "email": "macbooklover@test.com",
  "photos": [
    "http://localhost:3001/img/macbookpro-1.jpg", 
    "http://localhost:3001/img/macbookpro-2.jpg"
  ],
  "characteristics": {
    "14": 4,
    "15": 5
  }
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "rating": 4,
  "summary": "I am pleasantly surprised by this product.",
  "body": "Really glad that they redid the keyboard.",
  "recommend": true,
  "name": "Mac McIntosh",
  "email": "mac.macintosh@test.com",
  "photos": [
    "http://localhost:3001/img/macbookpro-1.jpg", 
    "http://localhost:3001/img/macbookpro-2.jpg"
  ],
  "characteristics": {
    "14": 4,
    "15": 5,
    "12": 4,
    "1": 5
  }
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "rating": 4,
  "summary": "I am returning this and keeping my old Macbook Pro 13\"",
  "body": "I like it but I don't need the upgrade as much as I thought I did.",
  "recommend": true,
  "name": "Frugal Spender",
  "email": "frugal.spender@test.com",
  "photos": [
    "http://localhost:3001/img/macbookpro-1.jpg", 
    "http://localhost:3001/img/macbookpro-2.jpg"
  ],
  "characteristics": {
    "14": 4,
    "15": 5,
    "12": 4,
    "1": 5
  }
}
EOF


