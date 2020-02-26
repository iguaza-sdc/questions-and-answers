#!/bin/bash

# Report Question
# Updates a question to show it was reported. Note, this action does not delete the question, but the question will not be returned in the above GET request.
# PUT /qa/question/:question_id/report

PORT=5001
QUESTION_ID=1
API="http://localhost:$PORT/qa/question/$QUESTION_ID/report"

curl -X PUT $API
