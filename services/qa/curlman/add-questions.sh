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

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "body": "Is 16GB of RAM enough or should I upgrade to 32GB?",
  "name": "Ned Ram",
  "email": "ned_ram@test.com"
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "body": "Is the upgraded graphics card worth it?",
  "name": "Video Editor",
  "email": "video_editor@test.com"
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "body": "Should I invest in Apple Care?",
  "name": "Clumsy Coder",
  "email": "clumsy_coder@test.com"
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "body": "Should I drop the money on the upgraded SSD?",
  "name": "Sam S. Dee",
  "email": "sam_s_dee@test.com"
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "body": "Is making the switch over from Windows going to be challenging",
  "name": "Dot Net Dev",
  "email": "dot_net_dev@test.com"
}
EOF
