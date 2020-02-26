#!/bin/bash

# Add an Answer
# Adds an answer for the given question
# POST /qa/:question_id/answers
# Use ~/app-data/mock-data/answers.json for mock data.

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:5001/qa/1/answers" \
-d @ << EOF
{
  "body": "Definitely worth it - get it today!",
  "name": "Tim Apple",
  "email": "tim@apple.com",
  "photos": [
    {
      "url": "https://tinyurl.com/ul43dkj",
      "thumbnail_url": "https://tinyurl.com/s7wbrhk"
    }
  ]
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:5001/qa/1/answers" \
-d @ << EOF
{

  "body": "A bit pricey but could be worth it if it is on sale",
  "name": "Johnny Appleseed",
  "email": "johnny@apple.com",
  "photos": [
    {
      "url": https://tinyurl.com/ul43dkj", 
      "thumbnail_url": "https://tinyurl.com/rskjve3"
    }
  ]
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:5001/qa/2/answers" \
-d @ << EOF
{
  "body": "16GB is more than enough RAM.",
  "name": "Enough Ram",
  "email": "enough.ram@test.com",
  "photos": [
    {
      "url": "http://localhost:3001/enough-ram_2560x2560.jpg",
      "thumbnail_url": "http://localhost:3001/enough-ram_250x250.jpg"
    }
  ]
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:5001/qa/3/answers" \
-d @ << EOF
{
  "body": "Always get Apple Care in case of accidental damage...",
  "name": "Accidental Damage",
  "email": "accidental.damage@test.com",
  "photos": [
    {
      "url": "https://tinyurl.com/ul43dkj",
      "thumbnail_url": "https://tinyurl.com/rskjve3"
    }
  ]
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:5001/qa/4/answers" \
-d @ << EOF
{
  "body": "Apple Care should be always be purchased if you want to make sure that you are covered in the case of damage to your Macbook.",
  "name": "Accidents Happen",
  "email": "accidents.happen@test.com",
  "photos": [
    {
      "url": "http://image.com/accidents-happen_2560x2560.jpg"
      "thumbnail_url": "http://image.com/accidents-250x250.jpg"  
    }
  ]
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:5001/qa/5/answers" \
-d @ << EOF
{
  "body": "The extra space is not always necessary considering the number of services there are available to store all of your data with a cloud services provider.",
  "name": "Amy WebServices",
  "email": "amy.webservices@aws.com",
  "photos": []
}
EOF
