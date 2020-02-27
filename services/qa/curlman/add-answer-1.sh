#!/bin/bash

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:5001/qa/1/answers" \
-d @- << EOF
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
