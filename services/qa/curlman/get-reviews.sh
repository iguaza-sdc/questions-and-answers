#!/bin/bash

# List Reviews
# Returns a list of reviews for a particular product. 
# This list does not include any reported reviews. 
# GET /reviews/:product_id/list

PORT=5001
PRODUCT_ID=1
API="http://localhost:$PORT/reviews/$PRODUCT_ID/list?page=1&count=1&sort=1"

curl -X GET $API
