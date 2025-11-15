// Nested loops and Two Pointers solution
// Time complexity: O(n^3)
// Space complexity: O(log n) to O(n) (for sorting)

const fourSum = (nums, target) => {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const res = [];
    
    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            
            let left = j + 1;
            let right = n - 1;
            
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    
    return res;
};

// Generalized K-Sum recursive solution
// Time complexity: O(n^(K-1))
// Space complexity: O(K) recursion stack

const fourSumKSum = (nums, target) => {
    nums.sort((a, b) => a - b);
    
    const kSum = (start, target, k) => {
        const res = [];
        const n = nums.length;
        if (start === n) return res;
        
        const average_value = Math.floor(target / k);
        if (nums[start] > average_value || average_value > nums[n - 1]) {
            return res;
        }
        
        if (k === 2) {
            let left = start;
            let right = n - 1;
            while (left < right) {
                const sum = nums[left] + nums[right];
                if (sum === target) {
                    res.push([nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
            return res;
        }
        
        for (let i = start; i < n - k + 1; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
            
            const subRes = kSum(i + 1, target - nums[i], k - 1);
            for (const subset of subRes) {
                res.push([nums[i], ...subset]);
            }
        }
        
        return res;
    };
    
    return kSum(0, target, 4);
};
