// Monotonic Stack solution
// Time complexity: O(n)
// Space complexity: O(n)

const dailyTemperatures = temperatures => {
    const n = temperatures.length;
    const res = new Array(n).fill(0);
    const stack = []; // stores indices
    
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIdx = stack.pop();
            res[prevIdx] = i - prevIdx;
        }
        stack.push(i);
    }
    
    return res;
};

// Array optimized search solution
// Time complexity: O(n)
// Space complexity: O(1) auxiliary space

const dailyTemperaturesOptimized = temperatures => {
    const n = temperatures.length;
    const res = new Array(n).fill(0);
    
    for (let i = n - 2; i >= 0; i--) {
        let curr = i + 1;
        
        while (curr < n && temperatures[curr] <= temperatures[i]) {
            if (res[curr] === 0) {
                curr = n; // no warmer day exists
            } else {
                curr += res[curr];
            }
        }
        
        if (curr < n) {
            res[i] = curr - i;
        }
    }
    
    return res;
};
