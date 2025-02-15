const isValid = (s) => {
    const stack = [];
    const closeToOpen = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        if (closeToOpen[char]) {
            if (s.length > 0 && stack[stack.length - 1] === closeToOpen[char]) {
                stack.pop();
                continue;
            }

            return false;
        }

        stack.push(char);
    }

    return stack.length === 0;
}