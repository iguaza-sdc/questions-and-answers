import json
import math
import random
import requests
import time

while True:
    response = requests.get(
        url=f"http://localhost:5001/qa/{random.randint(1, 10000)}/answers",
        json={
            "body": "42 is the answer to all questions including this one.",
            "name": "Omniscient Knowitall",
            "email": "holierthanthou@email.com",
            "photos": [
            {
                "url": "http://photos.com/photo.jpg",
                "thumbnail": "http://photos.com/thumbnail.jpg"
            }
        ]
    }
    )    import json
import math
import random
import requests
import time


counter = 0
while True:
    response = requests.get(
        url=f"http://localhost:5001/qa/{random.randint(1, 10000)}"
    }
    )    
    print(response)
    counter += 1

    print(response)
