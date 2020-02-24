#!/bin/sh

echo "Waiting for PostgreSQL..."

while ! nc -z qa-db 5432; do
  sleep 0.1
done

echo "PostgreSQL started!"

npm run dev
