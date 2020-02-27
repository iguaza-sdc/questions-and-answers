#!/bin/bash

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:5001/qa/4/answers" \
-d @- << EOF
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
