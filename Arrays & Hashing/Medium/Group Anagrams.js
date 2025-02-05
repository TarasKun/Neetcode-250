// Sorting Solution
// Time complexity: O(m * nlogn)
// Space complexity: O(m*m)
// where m is the number of strings and
// n is the length of the longest string.

const groupAnagramsSorting = (strs) => {
    const strsMap = {};

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');

        if (!strsMap[sortedStr]) {
            strsMap[sortedStr] = [];
        }

        strsMap[sortedStr].push(str);
    }

    return Object.values(strsMap);
}


// Hash table solution
// Time complexity: O(m * n)
// Space complexity: O(m)
const groupAnagrams = (strs) => {
    const strsMap = {};

    for (const str of strs) {
        const count = new Array(26).fill(0);

        for (const char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        const key = count.join(',');

        if (!strsMap[key]) {
            strsMap[key] = [];
        }

        strsMap[key].push(str);
    }

    return Object.values(strsMap);
}