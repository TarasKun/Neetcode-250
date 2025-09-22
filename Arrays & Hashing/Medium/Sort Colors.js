// Dutch National Flag (one pass) solution
// Time complexity: O(n)
// Space complexity: O(1)

const sortColors = nums => {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};

// Counting Sort (two pass) solution
// Time complexity: O(n)
// Space complexity: O(1)

const sortColorsCounting = nums => {
    const counts = [0, 0, 0];
    
    for (const num of nums) {
        counts[num]++;
    }
    
    let idx = 0;
    for (let color = 0; color < 3; color++) {
        for (let i = 0; i < counts[color]; i++) {
            nums[idx++] = color;
        }
    }
};
