// Stack solution
// Time complexity: O(n)
// Space complexity: O(n)

const decodeString = s => {
    const stack = [];
    
    for (const char of s) {
        if (char !== ']') {
            stack.push(char);
            continue;
        }
        
        // Retrieve the string inside brackets
        let str = '';
        while (stack.length > 0 && stack[stack.length - 1] !== '[') {
            str = stack.pop() + str;
        }
        
        stack.pop(); // pop '['
        
        // Retrieve the multiplier number
        let numStr = '';
        while (stack.length > 0 && stack[stack.length - 1] >= '0' && stack[stack.length - 1] <= '9') {
            numStr = stack.pop() + numStr;
        }
        
        const count = parseInt(numStr, 10);
        stack.push(str.repeat(count));
    }
    
    return stack.join('');
};

// Recursive solution
// Time complexity: O(n)
// Space complexity: O(n)

const decodeStringRecursive = s => {
    let index = 0;
    
    const helper = () => {
        let res = '';
        
        while (index < s.length && s[index] !== ']') {
            if (isNaN(s[index])) {
                res += s[index];
                index++;
            } else {
                let count = 0;
                while (s[index] >= '0' && s[index] <= '9') {
                    count = count * 10 + parseInt(s[index], 10);
                    index++;
                }
                index++; // skip '['
                const nested = helper();
                index++; // skip ']'
                res += nested.repeat(count);
            }
        }
        
        return res;
    };
    
    return helper();
};
