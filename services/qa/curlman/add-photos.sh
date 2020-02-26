#!/bin/bash

PORT=5001
ANSWER_ID=1
API=http://localhost:$PORT/photos/$ANSWER_ID

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "url": "https://image.com/001_2560x2560.jpg",
  "thumbnail_url": "https://image.com/001_250x250.jpg"
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "thumbnail_url": "https://image.com/002_2560x2560.jpg",
  "url": "https://image.com/002_250x250.jpg"
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "thumbnail_url": "https://image.com/003_2560x2560.jpg",
  "url": "https://image.com/003_250x250.jpg"
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "thumbnail_url": "https://image.com/003_2560x2560.jpg",
  "url": "https://image.com/003_250x250.jpg"
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "thumbnail_url": "https://image.com/004_2560x2560.jpg",
  "url": "https://image.com/004_250x250.jpg"
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "thumbnail_url": "https://image.com/005_2560x2560.jpg",
  "url": "https://image.com/005_250x250.jpg"
}
EOF
