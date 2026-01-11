// Sliding Window with Frequency Maps solution
// Time complexity: O(m + n)
// Space complexity: O(m + n)

const minWindow = (s, t) => {
    if (s.length < t.length) return "";
    
    const needed = {};
    for (const char of t) {
        needed[char] = (needed[char] || 0) + 1;
    }
    
    const window = {};
    let have = 0;
    const need = Object.keys(needed).length;
    
    let res = [-1, -1];
    let resLen = Infinity;
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        window[char] = (window[char] || 0) + 1;
        
        if (needed[char] !== undefined && window[char] === needed[char]) {
            have++;
        }
        
        while (have === need) {
            if (right - left + 1 < resLen) {
                res = [left, right];
                resLen = right - left + 1;
            }
            
            const leftChar = s[left];
            window[leftChar]--;
            
            if (needed[leftChar] !== undefined && window[leftChar] < needed[leftChar]) {
                have--;
            }
            
            left++;
        }
    }
    
    return resLen === Infinity ? "" : s.substring(res[0], res[1] + 1);
};
