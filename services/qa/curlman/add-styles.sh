#!/bin/bash

# Default represents the photo ID

PORT=5001
PRODUCT_ID=1
NAME="Space Gray"
SALE_PRICE=2299
ORIGINAL_PRICE=2699
DEFAULT_STYLE=1

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:$PORT/styles/$PRODUCT_ID" \
-d @- << EOF
{
  "name": "$NAME",
  "sale_price": "$SALE_PRICE",
  "original_price": "$ORIGINAL_PRICE",
  "default_style": $DEFAULT_STYLE
}
EOF

PORT=5001
PRODUCT_ID=1
NAME="Silver"
SALE_PRICE=2299
ORIGINAL_PRICE=2699
DEFAULT_STYLE=1

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:$PORT/styles/$PRODUCT_ID" \
-d @- << EOF
{
  "name": "$NAME",
  "sale_price": "$SALE_PRICE",
  "original_price": "$ORIGINAL_PRICE",
  "default_style": $DEFAULT_STYLE
}
EOF


curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:$PORT/styles/$PRODUCT_ID" \
-d @- << EOF
{
  "name": "Refurbished",
  "sale_price": 2199,
  "original_price": 2799,
  "default_style": 12
}
EOF
