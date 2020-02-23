#!/bin/bash

# Answers List
# Returns answers for a given question. This list does not include any reported answers.
# GET /qa/:question_id/answers

PORT=5003
QUESTION_ID=1
QUERY="?page=2&count=12"
API="http://localhost:$PORT/qa/$QUESTION_ID/answers$QUERY"

curl -X GET $API
