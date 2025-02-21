// Division
// Time complexity:O(n)
// Space complexity:O(1) since the output array is excluded from space analysis.

const productExceptSelfDivision = (nums) => {
    let product = 1;
    let zeroCount = 0;

    for (const num of nums) {
        num !== 0 ?
            product *= num :
            zeroCount++;
    }

    if (zeroCount > 1) {
        return Array(nums.length).fill(0);
    }

    const res = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        if (zeroCount > 0) {
            res[i] = nums[i] === 0 ? product : 0;
        } else {
            res[i] = product / nums[i];
        }
    }

    return res;
}


// Prefix & Suffix
// Time complexity:O(n)
// Space complexity:O(n)
const productExceptSelfPrefSuff = (nums) => {
    const numsLength = nums.length;
    const res = new Array(numsLength);
    const prefix = new Array(numsLength);
    const suffix = new Array(numsLength);

    prefix[0] = 1;
    suffix[numsLength - 1] = 1;

    for (let i = 1; i < numsLength; i++) {
        prefix[i] = nums[i - 1] * prefix[i - 1];
    }

    for (let i = numsLength - 2; i >= 0; i--) {
        suffix[i] = nums[i + 1] * suffix[i + 1];
    }

    for (let i = 0; i < numsLength; i++) {
        res[i] = prefix[i] * suffix[i];
    }

    return res;
}

// Prefix & Suffix Optimal
// Time complexity:O(n)
// Space complexity:O(1)
const productExceptSelf = (nums) => {
    const numsLength = nums.length;
    const res = new Array(numsLength).fill(1);

    for (let i = 1; i < numsLength; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }

    let postfix = 1;

    for (let i = numsLength - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }

    return res;
}

productExceptSelf([1,2,4,6])