#!/bin/bash 

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:5001/qa/1/answers" \
-d @- << EOF 
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
