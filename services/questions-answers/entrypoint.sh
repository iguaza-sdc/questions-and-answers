#!/bin/sh

if [[ $NODE_ENV == "development" ]]; then
  echo "Running application in development mode."
  npm run dev
elif [[ $NODE_ENV == "production" ]]; then
  echo "Running application in production mode."
  npm run prod
fi
