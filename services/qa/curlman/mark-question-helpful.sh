#!/bin/bash

# Mark Question as Helpful
# Updates a question to show it was found helpful.
# PUT /qa/question/:question_id/helpful

PORT=5001
QUESTION_ID=1
API="http://localhost:$PORT/qa/question/$QUESTION_ID/helpful"

curl -X PUT $API
