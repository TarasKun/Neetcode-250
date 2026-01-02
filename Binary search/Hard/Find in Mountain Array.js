// Binary Search peak and ranges solution
// Time complexity: O(log n)
// Space complexity: O(1)

const findInMountainArray = (target, mountainArr) => {
    const n = mountainArr.length();
    
    // 1. Find the peak index
    let left = 0;
    let right = n - 1;
    let peak = 0;
    
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
            left = mid + 1;
            peak = mid + 1;
        } else {
            right = mid;
        }
    }
    
    // 2. Binary search on the increasing part
    left = 0;
    right = peak;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const val = mountainArr.get(mid);
        if (val === target) {
            return mid;
        } else if (val < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // 3. Binary search on the decreasing part
    left = peak + 1;
    right = n - 1;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const val = mountainArr.get(mid);
        if (val === target) {
            return mid;
        } else if (val > target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // Fallback if not found
    return -1;
};

// Mock Mountain Array Helper Class for testing
// Time complexity: O(1)
// Space complexity: O(1)

class MockMountainArray {
    constructor(arr) {
        this.arr = arr;
    }
    get(index) {
        return this.arr[index];
    }
    length() {
        return this.arr.length;
    }
}
