# Create a dictionary by extracting the keys from a given dictionary**

# Write a Python program to create a new dictionary by extracting the mentioned keys from the below dictionary.
# input:sample_dict = {
#     "name": "Kelly",
#     "age": 25,
#     "salary": 8000,
#     "city": "New york"}

# # Keys to extract
# keys = ["name", "salary"]

# output:{'name': 'Kelly', 'salary': 8000}

sample_dict = {
    "name": "Kelly",
    "age": 25,
    "salary": 8000,
    "city": "New York"
}

keys = ["name", "salary"]

output_dict = {key: sample_dict[key] for key in keys}
print(output_dict)
