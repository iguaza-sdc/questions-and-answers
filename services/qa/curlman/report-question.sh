#!bin/bash

# Report Question
API="http://localhost:5003/qa/question/1/report"

curl -X PATCH $API 
