const maxArea = (heights) => {
    let left = 0;
    let right = heights.length - 1;
    let res = 0;

    while (left < right) {
        const area = Math.min(heights[left], heights[right]) * (right - left);

        res = Math.max(res, area);

        heights[left] <= heights[right] ? left++ : right--;
    }

    return res;
}