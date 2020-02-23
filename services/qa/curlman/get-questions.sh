#!/bin/bash

# List Questions
# GET /qa/:product_id 
# Retrieves a list of questions for a particular product. 
# This list does not include any reported questions.

PORT=5003
PRODUCT_ID=1
QUERY="?page=2&count=12"
API="http://localhost:$PORT/qa/$PRODUCT_ID"

curl -X GET $API
