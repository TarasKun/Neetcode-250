const searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = Math.floor((right + left)/2);

        if (nums[middle] < target) {
            left = middle + 1;
            continue;
        }

        if (nums[middle] > target) {
            right = middle - 1;
            continue;
        }

        return middle;
    }

    return left;
}