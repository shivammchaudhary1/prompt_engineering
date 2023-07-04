# Initialize dictionary with default values**

# In Python, we can initialize the keys with the same values.
# input:employees = ['Kelly', 'Emma']
# defaults = {"designation": 'Developer', "salary": 8000}

# output:{'Kelly': {'designation': 'Developer', 'salary': 8000}, 'Emma': {'designation': 'Developer', 'salary': 8000}}

employees = ['Kelly', 'Emma']
defaults = {"designation": 'Developer', "salary": 8000}

result = {employee: defaults for employee in employees}
print(result)
