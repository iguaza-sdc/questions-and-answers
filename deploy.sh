#!/bin/bash

eval $(aws ecr get-login --region us-east-1 --no-include-email)

export REPO=$AWS_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com

docker build $
