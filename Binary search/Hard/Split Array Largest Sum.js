// Binary Search on answer solution
// Time complexity: O(n * log(Sum - Max))
// Space complexity: O(1)

const splitArray = (nums, k) => {
    let left = Math.max(...nums);
    let right = nums.reduce((a, b) => a + b, 0);
    let ans = right;
    
    const canSplit = maxSum => {
        let count = 1;
        let currentSum = 0;
        
        for (const num of nums) {
            if (currentSum + num > maxSum) {
                count++;
                currentSum = num;
                if (count > k) return false;
            } else {
                currentSum += num;
            }
        }
        
        return true;
    };
    
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        
        if (canSplit(mid)) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return ans;
};

// Dynamic Programming solution
// Time complexity: O(n^2 * k)
// Space complexity: O(n * k)

const splitArrayDP = (nums, k) => {
    const n = nums.length;
    const memo = Array.from({ length: n }, () => new Array(k + 1).fill(-1));
    const prefixSums = new Array(n + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        prefixSums[i + 1] = prefixSums[i] + nums[i];
    }
    
    const solve = (idx, subarrayCount) => {
        if (subarrayCount === 1) {
            return prefixSums[n] - prefixSums[idx];
        }
        
        if (memo[idx][subarrayCount] !== -1) {
            return memo[idx][subarrayCount];
        }
        
        let minMaxSum = Infinity;
        
        for (let i = idx; i < n - subarrayCount + 1; i++) {
            const firstSplitSum = prefixSums[i + 1] - prefixSums[idx];
            const largestSplitSum = Math.max(firstSplitSum, solve(i + 1, subarrayCount - 1));
            minMaxSum = Math.min(minMaxSum, largestSplitSum);
            
            if (firstSplitSum >= minMaxSum) {
                break;
            }
        }
        
        memo[idx][subarrayCount] = minMaxSum;
        return minMaxSum;
    };
    
    return solve(0, k);
};
