#!/bin/bash

PORT=5001
ANSWER_ID=1
API="http://localhost:$PORT/qa/answer/$ANSWER_ID/helpful"

curl -X PUT $API

ANSWER_ID=2

curl -X PUT $API
