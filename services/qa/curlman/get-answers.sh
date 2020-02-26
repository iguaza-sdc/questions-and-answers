#!/bin/bash

PORT=5001
PRODUCT_ID=1
QUERY="?page=3&count=15"
API="http://localhost:$PORT/qa/$PRODUCT_ID/answers/$QUERY"

curl -X GET $API
