// Two Pointers solution
// Time complexity: O(n)
// Space complexity: O(1)

const trap = height => {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let trapped = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                trapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                trapped += rightMax - height[right];
            }
            right--;
        }
    }
    
    return trapped;
};

// Dynamic Programming solution
// Time complexity: O(n)
// Space complexity: O(n)

const trapDP = height => {
    const n = height.length;
    if (n === 0) return 0;
    
    const leftMax = new Array(n);
    const rightMax = new Array(n);
    
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    
    let trapped = 0;
    for (let i = 0; i < n; i++) {
        trapped += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    
    return trapped;
};
