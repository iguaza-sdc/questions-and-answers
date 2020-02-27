#!/bin/bash

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:5001/qa/5/answers" \
-d @- << EOF
{
  "body": "The extra space is not always necessary considering the number of services there are available to store all of your data with a cloud services provider.",
  "name": "Amy WebServices",
  "email": "amy.webservices@aws.com",
  "photos": []
}
EOF
