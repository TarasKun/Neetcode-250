// Monotonic Queue (Deque) solution
// Time complexity: O(n)
// Space complexity: O(k)

const maxSlidingWindow = (nums, k) => {
    const q = []; // Stores indices
    const res = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Remove indices of elements smaller than current element from back
        while (q.length > 0 && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        
        q.push(i);
        
        // Remove index from front if it is outside the sliding window
        if (q[0] === i - k) {
            q.shift();
        }
        
        // Only append to result if window size has reached k
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    
    return res;
};

// Prefix & Suffix Max solution
// Time complexity: O(n)
// Space complexity: O(n)

const maxSlidingWindowPrefixSuffix = (nums, k) => {
    const n = nums.length;
    const leftMax = new Array(n);
    const rightMax = new Array(n);
    
    leftMax[0] = nums[0];
    rightMax[n - 1] = nums[n - 1];
    
    for (let i = 1; i < n; i++) {
        leftMax[i] = i % k === 0 ? nums[i] : Math.max(leftMax[i - 1], nums[i]);
        const j = n - i - 1;
        rightMax[j] = (j + 1) % k === 0 ? nums[j] : Math.max(rightMax[j + 1], nums[j]);
    }
    
    const res = [];
    for (let i = 0; i <= n - k; i++) {
        res.push(Math.max(rightMax[i], leftMax[i + k - 1]));
    }
    return res;
};
