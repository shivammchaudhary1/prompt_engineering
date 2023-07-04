# 1. **Two Sum Problem**: Given an array of integers and a target integer, find the two integers in the array that sum to the target.
#     - *Input*: [2, 7, 11, 15], target = 9
#     - *Output*: "[0, 1]"

def two_sum(nums, target):
    complement_dict = {}

    for i, num in enumerate(nums):
        complement = target - num
        if complement in complement_dict:
            return [complement_dict[complement], i]
        complement_dict[num] = i

    return []

nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
print(result)
