// Binary Search on starting index solution
// Time complexity: O(log(n - k))
// Space complexity: O(1)

const findClosestElements = (arr, k, x) => {
    let left = 0;
    let right = arr.length - k;
    
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        
        // Compare the distance of x from arr[mid] vs arr[mid + k]
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return arr.slice(left, left + k);
};

// Two Pointers shrinking window solution
// Time complexity: O(n - k)
// Space complexity: O(1)

const findClosestElementsTwoPointers = (arr, k, x) => {
    let left = 0;
    let right = arr.length - 1;
    
    while (right - left >= k) {
        if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
            right--;
        } else {
            left++;
        }
    }
    
    return arr.slice(left, right + 1);
};
