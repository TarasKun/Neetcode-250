// Binary Search partition solution
// Time complexity: O(log(min(m, n)))
// Space complexity: O(1)

const findMedianSortedArrays = (nums1, nums2) => {
    let A = nums1;
    let B = nums2;
    
    if (A.length > B.length) {
        [A, B] = [B, A];
    }
    
    const m = A.length;
    const n = B.length;
    let left = 0;
    let right = m;
    
    while (left <= right) {
        const i = Math.floor(left + (right - left) / 2);
        const j = Math.floor((m + n + 1) / 2) - i;
        
        const leftA = i === 0 ? -Infinity : A[i - 1];
        const rightA = i === m ? Infinity : A[i];
        const leftB = j === 0 ? -Infinity : B[j - 1];
        const rightB = j === n ? Infinity : B[j];
        
        if (leftA <= rightB && leftB <= rightA) {
            if ((m + n) % 2 !== 0) {
                return Math.max(leftA, leftB);
            }
            return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
        } else if (leftA > rightB) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }
    
    return 0.0;
};

// Merge two arrays solution
// Time complexity: O(m + n)
// Space complexity: O(m + n)

const findMedianSortedArraysMerge = (nums1, nums2) => {
    const merged = [];
    let i = 0, j = 0;
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i++]);
        } else {
            merged.push(nums2[j++]);
        }
    }
    
    while (i < nums1.length) merged.push(nums1[i++]);
    while (j < nums2.length) merged.push(nums2[j++]);
    
    const len = merged.length;
    if (len % 2 !== 0) {
        return merged[Math.floor(len / 2)];
    }
    return (merged[len / 2 - 1] + merged[len / 2]) / 2;
};
