#!/bin/bash

# Get Review Metadata
# Returns review metadata for a given product.
# GET /reviews/:product_id/meta

PORT=5001
PRODUCT_ID=1
API="http://localhost:$PORT/reviews/$PRODUCT_ID/meta"

curl -X GET $API
