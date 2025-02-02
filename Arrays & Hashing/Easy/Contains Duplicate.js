// hashMap solution
// Time complexity: O(n)
// Space complexity: O(n)

const hasDuplicateMap = nums => {
    const numsMap = {}

    for (const num of nums) {
        if (numsMap[num]) {
            return true;
        } 
         
        numsMap[num] = 1;
    }

    return false;
}

// set size solution
// Time complexity: O(n)
// Space complexity: O(n)

const hasDuplicateSet = nums => {
    return new Set(nums).size < nums.length
}