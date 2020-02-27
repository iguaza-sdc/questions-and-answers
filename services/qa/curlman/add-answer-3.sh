#!/bin/bash

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:5001/qa/2/answers" \
-d @- << EOF
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
