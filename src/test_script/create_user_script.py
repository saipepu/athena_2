import requests
import json
import random

url = "http://localhost:3500/api/employee/signup"


name = [
    "James",
    "Robert",
    "Liam",
    "Noah",
    "Oliver",
    "Elijah",
    "James",
    "William",
    "Benjamin",
    "Lucas",
    "Henry",
    "Theodore",
    "Jack",
    "Levi",
    "Alexander",
    "prfix_James",
    "prfix_Robert",
    "prfix_Liam",
    "prfix_Noah",
    "prfix_Oliver",
    "prfix_Elijah",
    "prfix_James",
    "prfix_William",
    "prfix_Benjamin",
    "prfix_Lucas",
    "prfix_Henry",
    "prfix_Theodore",
    "prfix_Jack",
    "prfix_Levi",
    "aprfix_Alexander",
    "aprfix_James",
    "aprfix_Robert",
    "aprfix_Liam",
    "aprfix_Noah",
    "aprfix_Oliver",
    "aprfix_Elijah",
    "aprfix_James",
    "aprfix_William",
    "aprfix_Benjamin",
    "aprfix_Lucas",
    "aprfix_Henry",
    "aprfix_Theodore",
    "aprfix_Jack",
    "aprfix_Levi",
    "aprfix_Alexander",
]

headers = {"Content-Type": "application/json"}


for i in name:
    random_exp = random.randint(0, 50)
    print(random_exp)
    payload = json.dumps(
        {
            "name": f"!{i}",
            "email": f"!{i}@athena.com",
            "password": "12345",
            "department": "Chef",
            "position": "Assistant Chef",
            "exp": random_exp,
            "rank": 0,
        }
    )

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)
