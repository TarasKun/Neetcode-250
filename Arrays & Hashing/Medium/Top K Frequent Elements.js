// Input: nums = [1,2,2,3,3,3], k = 2
// Output: [2,3]

// Sorting
// Time complexity: O(n)
// Space complexity: O(nlogn)
const topKFrequentSorting = (nums, k) => {
    const obj = {}

    nums.forEach((item) => obj[item] = (obj[item] || 0) + 1);

    const arr = Object.entries(obj).map(([num, freq]) => [freq, parseInt(num)]); // [ [ 3, 3 ], [ 2, 2 ], [ 1, 1 ] ]

    arr.sort((a, b) => b[0] - a[0]); //[ [ 3, 3 ], [ 2, 2 ], [ 1, 1 ] ]
    //      [ [ 3, 3 ], [ 2, 2 ] ] -> [ 3, 2 ]
    return arr.slice(0, k).map(pair => pair[1]);
}

// Bucket sort
// Time complexity: O(n)
// Space complexity: O(n)
const topKFrequent = (nums, k) => {
    const obj = {}

    //[ [], [], [], [], [], [], [] ]
    const freq = Array.from({ length: nums.length + 1 }, () => []);

    nums.forEach((item) => obj[item] = (obj[item] || 0) + 1);

    // [ [], [ 1 ], [ 2 ], [ 3 ], [], [], []]
    for (const n in obj) {
        freq[obj[n]].push(+n);
    }

    const res = [];
    for (let i = freq.length - 1; i > 0; i--) {
        for (const n of freq[i]) {
            res.push(n);
            if (res.length === k) {
                return res;
            }
        }
    }
}

const s = topKFrequent([1,2,2,3,3,3], 2)

