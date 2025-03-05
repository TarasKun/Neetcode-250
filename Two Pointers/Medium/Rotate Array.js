// Time complexity:O(n)
// Space complexity:O(1) or O(n) depending on the language.
// const rotate = (nums, k) => {
//     return nums.splice(0, 0, ...nums.splice(nums.length - (k % nums.length)));
// }

// Time complexity: O(n)
// Space complexity: O(n)

const rotate = (nums, k) => {
    const length = nums.length;
    const tmp = new Array(length);

    for (let i = 0; i < length; i++) {
        tmp[(i + k) % length] = nums[i];
    }

    for (let i = 0; i < length; i++) {
        nums[i] = tmp[i];
    }
}