#!/bin/bash

PORT=5001
PRODUCT_ID=1
API="http://localhost:$PORT/products/$PRODUCT_ID/styles"

curl -X GET $API
