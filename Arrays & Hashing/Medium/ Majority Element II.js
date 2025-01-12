const majorityElement = function(nums) {
    const numsMap = {}

    nums.forEach(item => numsMap[item] = (numsMap[item] || 0) + 1)

    const res = [];

    for (const [key, value] of Object.entries(numsMap)) {

        if (value > Math.floor(nums.length / 3)) {
            res.push(+key)
        }
    }

    return res;
};