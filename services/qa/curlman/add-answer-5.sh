#!/bin/bash

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:5001/qa/3/answers" \
-d @- << EOF
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
