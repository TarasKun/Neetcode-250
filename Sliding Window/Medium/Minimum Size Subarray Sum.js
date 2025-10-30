// Sliding Window solution
// Time complexity: O(n)
// Space complexity: O(1)

const minSubArrayLen = (target, nums) => {
    let minLength = Infinity;
    let sum = 0;
    let left = 0;
    
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    
    return minLength === Infinity ? 0 : minLength;
};

// Binary Search with Prefix Sums solution
// Time complexity: O(n log n)
// Space complexity: O(n)

const minSubArrayLenBinarySearch = (target, nums) => {
    const n = nums.length;
    if (n === 0) return 0;
    
    const sums = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        sums[i] = sums[i - 1] + nums[i - 1];
    }
    
    let minLength = Infinity;
    
    for (let i = 0; i <= n; i++) {
        const toFind = sums[i] + target;
        let left = i + 1;
        let right = n;
        let bound = -1;
        
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (sums[mid] >= toFind) {
                bound = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        if (bound !== -1) {
            minLength = Math.min(minLength, bound - i);
        }
    }
    
    return minLength === Infinity ? 0 : minLength;
};
