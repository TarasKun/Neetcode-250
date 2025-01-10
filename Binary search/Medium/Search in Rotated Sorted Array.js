const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const m = Math.floor((left + right) / 2);

        nums[m] > nums[right] ?
            left = m + 1 :
            right = m;
    }

    const pivot = left;

    const result = this.binarySearch(nums, target, 0, pivot - 1);

    if (result !== -1) {
        return result;
    }

    return this.binarySearch(nums, target, pivot, nums.length - 1);
}

const binarySearch = (nums, target, left, right) => {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}