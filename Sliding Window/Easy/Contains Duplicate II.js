const containsNearbyDuplicate = function(nums, k) {
    const numsMap = new Map();
    // nums[i] == nums[j]
    // Math.abs(i - j) <= k
    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(nums[i])) {
            if (i - numsMap.get(nums[i]) <= k) {
                return true;
            }
        }

        numsMap.set(nums[i], i)
    }

    return false
};