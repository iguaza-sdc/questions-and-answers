#!/bin/bash

# Report Answer
# Updates an answer to show it has been reported. 
# Note, this action does not delete the answer, 
# but the answer will not be returned in the above GET request.
# PUT /qa/answer/:answer_id/report

PORT=5003
ANSWER_ID=1
API="http://localhost:$PORT/qa/answer/$ANSWER_ID/report"

curl -X PUT $API
