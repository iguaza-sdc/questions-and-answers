#!/bin/bash

# Add a Feature
PORT=5001
PRODUCT_ID=1
API=http://localhost:$PORT/features/$PRODUCT_ID

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "feature": "CPU",
  "value": "2.4 GHz Intel Core i9 8-Core"
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "feature": "RAM",
  "value": "64GB 2666MHz DDR4 memory"
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
$API \
-d @- << EOF
{
  "feature": "GPU",
  "value": "AMD Radeon Pro 5500M 8GB GDDR6 Memory"
}
EOF
