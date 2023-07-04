# 5. **String Reversal**: Write a Python function that takes a string and returns the string in reverse order.
#     - *Input*: "Python"
#     - *Output*: "nohtyP"

def reverse_string(string):
    return string[::-1]


string = "Python"
rev_string = reverse_string(string)
print(rev_string)
