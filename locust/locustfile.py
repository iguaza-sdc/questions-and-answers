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

from locust import HttpLocust
from locust import TaskSet
from locust import between
from locust import task


class UserBehavior(TaskSet):
    def on_start(self):
        self.get_question()

    @task
    def add_question(self):
        question = {
            "body": "Is this a question body?",
            "name": "Test Question",
            "email": "test.question@test.com"
        }
        self.client.post("/qa", question)

    @task
    def get_question(self):
        self.client.get(f"/qa/1000")

    @task
    def mark_question_helpful(self):
        self.client.put(f"/qa/question/10000/helpful")

    @task
    def report_question(self):
        self.client.put(f"/qa/question/10000/report")

    @task
    def add_answer(self):
        answer = {
            "body": "This is an answer.",
            "name": "Test Answer",
            "email": "test.answer@test.com",
            "photos": [
                {
                    "url": "tinyurl.com/photo1.jpg",
                    "thumbnail": "tinyurl.com/thumbnail0.jpg"
                },
                {
                    "url": "tinyurl.com/photo1.jpg",
                    "thumbnail": "tinyurl.com/thumbnail1.jpg"
                }
            ]
        }
        self.client.post(f"/qa/1000/answers")

    @task
    def get_answers(self):
        self.client.get(f"/qa/1000/answers")

    @task
    def mark_answer_helpful(self):
        self.client.put(f"/qa/answer/1/helpful")

    @task
    def report_answer(self):
        self.client.put(f"/qa/answer/1/report")

class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    min_wait = 1000
    max_wait = 2000


