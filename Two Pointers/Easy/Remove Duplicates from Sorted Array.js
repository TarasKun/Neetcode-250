const removeDuplicates = function(nums) {
    let i = 1;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[i - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;
};

// [0,0,1,1,1,2,2,3,3,4]
// 0 !== 0 -> 0 !== 0 false
// 1 !== 0 -> 0 !== 0 false
// 2 !== 0 -> 1 !== 0 true nums[i(1)] = nums[j(2)] (1)
// [0,1,1,1,1,2,2,3,3,4]
// 3 !== 2 -> 1 !== 1
// 4 !== 2 -> 1 !== 1
// 5 !== 2 -> 2 !== 1 true nums[i(2)] = nums[j(5)] (2)
// [0,1,2,1,1,2,2,3,3,4]
// 6 !== 3 -> 2 !== 1