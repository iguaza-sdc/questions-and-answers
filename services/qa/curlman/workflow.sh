#!/bin/bash

echo "-----------------------------------------------------------------"

chmod +x add-products.sh \
  add-styles.sh \
  add-features.sh \
  get-product-information.sh \
  add-question.sh \
  add-answers.sh \
  add-photos.sh \
  mark-question-helpful.sh \
  get-questions.sh \
  report-question.sh \
  get-questions.sh

echo "Adding product..."
./add-products.sh

echo "Adding styles.."
./add-styles.sh 

echo "Adding features..."
./add-features.sh 
 
echo "Getting product information..."
./get-product-information.sh 

echo "Adding question..."
./add-questions.sh

echo "Adding answers..."
./add-answers.sh

echo "Adding answer photos..."
./add-photos.sh

echo "Marking question helpful..."
./mark-question-helpful.sh

echo "Getting question to check for changed helpfulness..."
./get-questions.sh

echo "Reporting question..."
./report-question.sh

echo "Getting questions.. Reported question should not be returned..."
./get-questions.sh

