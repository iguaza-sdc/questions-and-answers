#!/bin/bash

PORT=5001
API="http://localhost:$PORT/products"

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:5001/products" \
-d @- << EOF
{
  "name": "Macbook Pro 16 Inch (Late 2019)",
  "slogan": "The best for the brightest.",
  "description": "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. With an immersive 16-inch Retina display, superfast processors, next-generation graphics, the largest battery capacity ever in a MacBook Pro, a new Magic Keyboard, and massive storage, it’s the ultimate pro notebook for the ultimate user.",
  "category": "Laptop",
  "default_price": 2399
}
EOF

curl -X POST \
-H "Content-Type: application/json" \
"http://localhost:5001/products" \
-d @- << EOF
{
  "name": "Macbook Pro 13 Inch (Late 2019)",
  "slogan": "With great power comes great capability.",
  "description": "MacBook Pro elevates the notebook to a whole new level of performance and portability. Wherever your ideas take you, you’ll get there faster than ever with high‑performance processors and memory, advanced graphics, blazing‑fast storage, and more — all in a compact 3-pound package.",
  "category": "Laptop",
  "default_price": 1299
}
EOF
