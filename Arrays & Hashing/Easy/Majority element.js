// Hash map
// Time complexity: O(n)
// Space complexity: O(n)
const majorityElement = function(nums) {
    const numsObj = {};
    let majority = 0;
    let res = 0;

    nums.forEach(num => {
        numsObj[num] = (numsObj[num] || 0) + 1;

        if (numsObj[num] > majority) {
            res = num; 
            majority = numsObj[num];
        }
    })
    
    return res;
};


// Without map, just count numbers
// Time complexity: O(n)
// Space complexity: O(1)
const majorityElementOptimal = function(nums) {
    let res = 0;
    let majority = 0;
    
    for (let num of nums) {
        if (majority === 0) {
            res = num;
        }
        
        majority += num === res ? 1 : -1;
    }
    
    return res; 
}