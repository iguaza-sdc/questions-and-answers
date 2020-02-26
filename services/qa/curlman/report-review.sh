#!/bin/bash

# Report Review
# Updates a review to show it was reported. 
# Note, this action does not delete the review, 
# but the review will not be returned in the above GET request.
# PUT /reviews/report/:review_id

PORT=5001
REVIEW_ID=1
API="http://localhost:$PORT/reviews/report/$REVIEW_ID"

curl -X PUT $API
