# 8. **Factorial Calculation**: Write a Python function that calculates the factorial of a number.
#     - *Input*: 5
#     - *Output*: "Factorial of 5 is 120."

def factorial(num):
    if (num < 0):
        return "Factorial is undefined for negative numbers."
    elif num == 0:
        return 1
    else:
        res = 1
        for i in range(1, num + 1):
            res *= i
        return res


num = 4
factorial_res = factorial(num)
print(f"Factorial of {num} is {factorial_res}.")
