# 6. **Count Vowels**: Write a Python program that counts the number of vowels in a given string.
#     - *Input*: "Hello"
#     - *Output*: "Number of vowels: 2"

def count_vowels(string):
    vowels = "aeiouAEIOU"
    count = 0

    for char in string:
        if char in vowels:
            count += 1

    return count


string = "Python"
count = count_vowels(string)
print("Number of vowels:", count)
