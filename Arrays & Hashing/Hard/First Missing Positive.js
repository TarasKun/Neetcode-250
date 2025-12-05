// Cyclic Sort solution
// Time complexity: O(n)
// Space complexity: O(1)

const firstMissingPositive = nums => {
    const n = nums.length;
    
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            const dest = nums[i] - 1;
            [nums[i], nums[dest]] = [nums[dest], nums[i]];
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    
    return n + 1;
};

// Set hashing solution
// Time complexity: O(n)
// Space complexity: O(n)

const firstMissingPositiveSet = nums => {
    const set = new Set(nums);
    let i = 1;
    while (set.has(i)) {
        i++;
    }
    return i;
};
