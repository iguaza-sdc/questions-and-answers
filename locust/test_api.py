import json
import math
import random
import requests
import threading
import time

counter = 0

def add_answer():
    response = requests.post(
        url=f"http://54.84.5.211/qa/{random.randint(1, 100000)}",
        json={
            "body": "This is greatest answer in all of Kazakhstan.",
            "name": "Borat Sadgiyev",
            "email": "borat.sagdiyev@email.com",
            "photos": [
                {
                    "url": "http://photos.com/photo.jpg",
                    "thumbnail": "http://photos.com/thumbnail.jpg"
                }
            ]
        }
    )
    print(response.content)
    

def get_questions():
    response = requests.get(
        url=f"http://54.84.5.211/qa/{random.randint(1, 100000)}",
    )    
    print(response.content)

while True:
    task1 = threading.Thread(target=get_questions, name="get_questions")
    task2 = threading.Thread(target=get_questions, name="get_questions")
    task3 = threading.Thread(target=add_answer, name="add_answer")
    task4 = threading.Thread(target=add_answer, name="add_answer")

    task1.start()
    task2.start()
    task3.start()
    task4.start()

    task1.join()
    counter += 1
    task2.join()
    counter += 1
    task3.join()
    counter += 1 
    task4.join()
    counter += 1

    print(counter)
