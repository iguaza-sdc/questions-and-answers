#!/bin/bash

ANSWER_ID=1
API="http://localhost:5003/qa/answer/$ANSWER_ID/helpful"

curl -X PUT $API
