# 7. **Prime Number**: Write a Python function that checks whether a given number is a prime number.
#     - *Input*: 13
#     - *Output*: "13 is a prime number."

def is_prime(num):
    if (num < 2):
        return False

    for i in range(2, int(num ** 0.5) + 1):
        if (num % i == 0):
            return False

    return True


num = 13
if is_prime(num):
    print(f"{num} is a prime.")
else:
    print(f"{num} is not a prime.")
