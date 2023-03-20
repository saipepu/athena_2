import requests
import json

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
    "prfix_Alexander",
]

headers = {"Content-Type": "application/json"}

for i in name:
    payload = json.dumps(
        {
            "name": f"_{i}",
            "email": f"_{i}@athena.com",
            "password": "12345",
            "department": "Chef",
            "position": "Assistant Chef",
            "exp": 0,
            "rank": 0,
        }
    )

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)
