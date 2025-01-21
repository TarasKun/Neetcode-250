const lengthOfLongestSubstring = (s) => {
    let mp = new Map();
    let left = 0, res = 0;

    for (let right = 0; right < s.length; right++) {
        if (mp.has(s[right])) {
            left = Math.max(mp.get(s[right]) + 1, left);
        }

        mp.set(s[right], right);
        res = Math.max(res, right - left + 1);
    }

    return res;
}