#!/bin/bash

# Mark Review as Helpful
# Updates a review to show it was found helpful.
# PUT /reviews/helpful/:review_id

PORT=5001
REVIEW_ID=1
API="http://localhost:$PORT/reviews/helpful/$REVIEW_ID"

curl -X PUT $API
