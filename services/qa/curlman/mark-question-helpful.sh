#!/bin/bash

QUESTION_ID=1
API="http://localhost:5003/qa/question/$QUESTION_ID/helpful"

curl -X PUT $API
