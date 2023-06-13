var containsDuplicate = (nums) => {
    for (let right = 0; right < nums.length; right++) {/* Time O(N) */
        for (let left = 0; left < right; left++) {         /* Time O(N) */
            const isDuplicate = nums[left] === nums[right];
            if (isDuplicate) return true;
        }
    }

    return false;
}
nums = [1,2,3,1]

console.log(containsDuplicate(nums))

nums = [1,2,3,4]

console.log(containsDuplicate(nums))

nums = [1,1,1,3,3,4,3,2,4,2]

console.log(containsDuplicate(nums))
