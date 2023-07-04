### **Arrange string characters such that lowercase letters should come first**

# Given string contains a combination of the lower and upper case letters. Write a program to arrange the characters of a string so that all lowercase letters should come first.

def arrange_string(s):
    lowercase_letters = []
    uppercase_letters = []

    for char in s:
        if char.islower():
            lowercase_letters.append(char)
        else:
            uppercase_letters.append(char)

    arranged_string = ''.join(lowercase_letters + uppercase_letters)
    return arranged_string


s = "PyNaTive"
arranged = arrange_string(s)
print(arranged)
