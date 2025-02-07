const merge = function(nums1, m, nums2, n) {
    let left = m - 1;
    let right = n - 1;
    let i = m + n - 1;

    while (right >= 0) {
        if (left >= 0 && nums1[left] > nums2[right]) {
            nums1[i] = nums1[left];
            left--;
        } else {
            nums1[i] = nums2[right];
            right--;
        }
        i--;
    }
};