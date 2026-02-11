// Monotonic Stack solution
// Time complexity: O(n)
// Space complexity: O(n)

const largestRectangleArea = heights => {
    const stack = []; // Stores indices
    let maxArea = 0;
    const n = heights.length;
    
    for (let i = 0; i <= n; i++) {
        const currentHeight = i === n ? 0 : heights[i];
        
        while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
            const h = heights[stack.pop()];
            const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, h * w);
        }
        
        stack.push(i);
    }
    
    return maxArea;
};

// Divide and Conquer solution
// Time complexity: O(n log n) average, O(n^2) worst case
// Space complexity: O(n)

const largestRectangleAreaDC = heights => {
    const calculateArea = (start, end) => {
        if (start > end) return 0;
        
        let minIndex = start;
        for (let i = start + 1; i <= end; i++) {
            if (heights[i] < heights[minIndex]) {
                minIndex = i;
            }
        }
        
        return Math.max(
            heights[minIndex] * (end - start + 1),
            Math.max(calculateArea(start, minIndex - 1), calculateArea(minIndex + 1, end))
        );
    };
    
    return calculateArea(0, heights.length - 1);
};
