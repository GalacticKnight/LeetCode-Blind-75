var twoSum = (nums, target) => {
    for (let curr = 0; curr < nums.length; curr++) {/* Time O(N) */
        const complement = target - nums[curr];

        for (let next = (curr + 1); next < nums.length; next++) {/* Time O(N) */
            const num = nums[next];

            const isTarget = num === complement
            if (isTarget) return [ curr, next ];
        }
    }

    return [ -1, -1 ];
}

nums = [2,7,11,15], target = 9

console.log(twoSum(nums, target))

nums = [3,2,4], target = 6

console.log(twoSum(nums, target))

nums = [3,3], target = 6

console.log(twoSum(nums, target))