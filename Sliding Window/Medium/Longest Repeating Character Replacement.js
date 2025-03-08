// Time complexity:O(n)
// Space complexity:O(m)
const characterReplacement = (s, k) => {
    let res = 0;
    const count = new Map();

    let left = 0;
    let maxF = 0;

    for (let i = 0; i < s.length; i++) {
        count.set(s[i], (count.get(s[i]) || 0) + 1);
        maxF = Math.max(maxF, count.get(s[i]));

        while ((i - left + 1) - maxF > k) {
            count.set(s[left], count.get(s[left]) - 1);
            left++;
        }

        res = Math.max(res, i - left + 1);
    }

    return res;
}
