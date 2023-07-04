# Concatenate two lists in the following order
# list1 = ["Hello ", "take "]
# list2 = ["Dear", "Sir"]

list1 = ["Hello ", "take "]
list2 = ["Dear", "Sir"]

concatenated_list = [a + b for a in list1 for b in list2]
print(concatenated_list)
