### **Concatenate two lists index-wise**

# Write a program to add two lists index-wise. Create a new list that contains the 0th index item from both the list, then the 1st index item, and so on till the last element. any leftover items will get added at the end of the new list.

# list1 = ["M", "na", "i", "Ke"]
# list2 = ["y", "me", "s", "lly"]


def add_lists(list1, list2):
    result = []
    min_length = min(len(list1), len(list2))


    for i in range(min_length):
        result.append(list1[i])
        result.append(list2[i])


    if (len(list1) > min_length):
        result.extend(list1[min_length:])
    elif (len(list2) > min_length):
        result.extend(list2[min_length:])

    return result


list1 = ["M", "na", "i", "Ke"]
list2 = ["y", "me", "s", "lly"]
result = add_lists(list1, list2)
print(result)
