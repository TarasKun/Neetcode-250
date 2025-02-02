const getConcatenation = nums => {
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i];
        ans[i + nums.length - 1] = nums[i];
    }

    return ans;
}