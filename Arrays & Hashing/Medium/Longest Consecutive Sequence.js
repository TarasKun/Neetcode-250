const longestConsecutive = (nums) => {
    // O(n) time
    // O(n)

    const numsMap = new Map();
    let longest = 0;

    for (const num of nums) {
        if (!numsMap.has(num)) {
            numsMap.set(num, (numsMap.get(num - 1) || 0) + (numsMap.get(num + 1) || 0) + 1);
            numsMap.set(num - (numsMap.get(num - 1) || 0), numsMap.get(num));
            numsMap.set(num + (numsMap.get(num + 1) || 0), numsMap.get(num));

            console.log(numsMap)
            longest = Math.max(longest, numsMap.get(num));
        }
    }

    return longest;
}