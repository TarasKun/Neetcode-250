// Merge Sort solution
// Time complexity: O(n log n)
// Space complexity: O(n)

const sortArray = nums => {
    if (nums.length <= 1) return nums;
    
    const mid = Math.floor(nums.length / 2);
    const left = sortArray(nums.slice(0, mid));
    const right = sortArray(nums.slice(mid));
    
    return merge(left, right);
};

const merge = (left, right) => {
    const sorted = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i++]);
        } else {
            sorted.push(right[j++]);
        }
    }
    
    return [...sorted, ...left.slice(i), ...right.slice(j)];
};

// Heap Sort solution
// Time complexity: O(n log n)
// Space complexity: O(1)

const sortArrayHeap = nums => {
    const heapify = (size, idx) => {
        let largest = idx;
        const left = 2 * idx + 1;
        const right = 2 * idx + 2;
        
        if (left < size && nums[left] > nums[largest]) {
            largest = left;
        }
        if (right < size && nums[right] > nums[largest]) {
            largest = right;
        }
        
        if (largest !== idx) {
            [nums[idx], nums[largest]] = [nums[largest], nums[idx]];
            heapify(size, largest);
        }
    };
    
    const n = nums.length;
    
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(n, i);
    }
    
    // Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]];
        heapify(i, 0);
    }
    
    return nums;
};
