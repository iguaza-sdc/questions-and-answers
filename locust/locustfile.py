"""
- GET /qa/:product_id
- POST /qa/:product_id
- PUT /qa/question/:question_id/helpful
- PUT /qa/question/:question_id/helpful
- GET /qa/:question_id/answers
- POST /qa/:question_id/answers
- PUT /qa/answer/:answer_id/helpful
- PUT /qa/answer/:answer_id/report
"""

import json
import random

from faker import Faker

from locust import HttpLocust
from locust import TaskSet
from locust import between
from locust import task

random.randrange(1, 1000000)

fake = Faker()

class UserBehavior(TaskSet):
    headers = {"content-type": "application/json"}

    def on_start(self):
        self.get_question()

    @task
    def add_question(self):
        self.client.post(
            f"/qa/{random.randint(1, 1000)}",
            headers=self.headers,
            json={
                "name": fake.name(),
                "email": fake.email(),
                "body": fake.text(),
                "product_id": random.randint(1, 100),
            },
        )

    @task
    def get_question(self):
        self.client.get(f"/qa/{random.randint(1, 1000)}")

    @task
    def mark_question_helpful(self):
        self.client.put(f"/qa/question/{random.randint(1, 1000)}/helpful")

    @task
    def report_question(self):
        self.client.put(f"/qa/question/{random.randint(1, 1000)}/report")

    @task
    def add_answer(self):
        self.client.post(
            f"/qa/{random.randint(1, 3000000)}/answers",
            headers=self.headers,
            json={
                "body": fake.text(),
                "name": fake.name(),
                "email": fake.email(),
                "photos": [
                    {
                        "url": "tinyurl.com/photo1.jpg",
                        "thumbnail": "tinyurl.com/thumbnail0.jpg",
                    },
                    {
                        "url": "tinyurl.com/photo1.jpg",
                        "thumbnail": "tinyurl.com/thumbnail1.jpg",
                    },
                ],
            }
        )

    @task
    def get_answers(self):
        self.client.get(f"/qa/{random.randint(1, 3000000)}/answers")

    @task
    def mark_answer_helpful(self):
        self.client.put(f"/qa/answer/{random.randint(1, 100000)}/helpful")

    @task
    def report_answer(self):
        self.client.put(f"/qa/answer/{random.randint(1, 100000)}/report")


class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    wait_time = between(1, 2)
