#!/bin/bash

PORT=5001
ANSWER_ID=1
API="http://localhost:$PORT/qa/answer/$ANSWER_ID/helpful"

curl -X PUT $API
