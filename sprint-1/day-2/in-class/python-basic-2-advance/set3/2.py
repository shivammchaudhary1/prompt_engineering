# 1. **Dictionary Manipulation**: Create a dictionary with keys as names and values as ages. Write functions to add a new name-age pair, update the age of a name, and delete a name from the dictionary.
#     - *Input*: Add "John": 25, Update "John": 26, Delete "John"
#     - *Output*: "{}, {'John': 26}, {}"

def add_name_age(dictionary, name, age):
    dictionary[name] = age
    return dictionary

def update_age(dictionary, name, new_age):
    if name in dictionary:
        dictionary[name] = new_age
    return dictionary

def delete_name(dictionary, name):
    if name in dictionary:
        del dictionary[name]
    return dictionary

my_dict = {}

my_dict = add_name_age(my_dict, "John", 25)
print(my_dict)

my_dict = update_age(my_dict, "John", 26)
print(my_dict)

my_dict = delete_name(my_dict, "John")
print(my_dict)
