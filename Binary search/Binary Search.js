const binarySearch = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    // [-1,0,2,4,6,8] 6 - 0
    while (left <= right) {
        const middle = left + Math.floor((right - left)/2);

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

    return -1;
}