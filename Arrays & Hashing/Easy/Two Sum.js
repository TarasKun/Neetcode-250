// Hash map two pass
// Time complexity: O(n)
// Space complexity: O(n)
    const twoSumTwoPass = (nums, target) => {
    const numsObj = {};

    nums.forEach((num, index) => numsObj[num] = index);

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        
        if (numsObj[diff] !== undefined && numsObj[diff] !== i) {
            return [i, numsObj[diff]];
        } 
    }

    return [];
}

// Hash map on pass
// Time complexity: O(n)
// Space complexity: O(n)

const twoSum = (nums, target) => {
    const numsMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (numsMap.has(diff)) {
            return [i, numsMap.get(diff)]
        }

        numsMap.set(nums[i], i)
    }

    return [];
}
