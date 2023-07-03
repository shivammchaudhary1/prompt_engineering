# 9. **Fibonacci Sequence**: Write a Python function that generates the first n numbers in the Fibonacci sequence.
#     - *Input*: 5
#     - *Output*: "[0, 1, 1, 2, 3]"

def fibonacci(n):
    sequence = [0, 1]

    if (n <= 2):
        return sequence[:n]

    for _ in range(2, n):
        next_number = sequence[-1] + sequence[-2]
        sequence.append(next_number)

    return sequence


n = 5
fibonacci_sequence = fibonacci(n)
print(fibonacci_sequence)
