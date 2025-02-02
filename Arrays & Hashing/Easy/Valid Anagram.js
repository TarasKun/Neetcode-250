// Time complexity: O(n + m)
// Space complexity: O(n + m)

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const sObj = {};
    const tObj = {};

    for (let i = 0; i < s.length; i++) {
        sObj[s[i]] = (sObj[s[i]] || 0) + 1;
        tObj[t[i]] = (tObj[t[i]] || 0) + 1;
    }

    for (const letter in sObj) {
        if (sObj[letter] !== tObj[letter]) {
            return false;
        }
    }
    
    return true;
}
