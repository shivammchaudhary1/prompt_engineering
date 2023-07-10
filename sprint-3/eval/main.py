
# PART-1

str = input("Give me the String\n")

def reverse_string(str):
    reverse = str[::-1]
    print(reverse)
    
reverse_string(str)


# PART-2 

def max_salary_employee(employees):
    max_salary = 0
    employee = None
    
    for i in employees:
        if i["salary"] > max_salary:
            max_salary = i["salary"]
            employee = i
    
    return employee

employees = [
    {"name": "John", "salary": 3000, "designation": "developer"},
    {"name": "Emma", "salary": 4000, "designation": "developer"},
    {"name": "Kelly", "salary": 3500, "designation": "developer"}
]

res = max_salary_employee(employees)
print(res)
