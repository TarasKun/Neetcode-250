// Stack solution
// Time complexity: O(n)
// Space complexity: O(n)

const simplifyPath = path => {
    const stack = [];
    const parts = path.split('/');
    
    for (const part of parts) {
        if (part === '' || part === '.') {
            continue;
        }
        if (part === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(part);
        }
    }
    
    return '/' + stack.join('/');
};

// Stack solution using reduce
// Time complexity: O(n)
// Space complexity: O(n)

const simplifyPathReduce = path => {
    return '/' + path.split('/').reduce((acc, part) => {
        if (part === '' || part === '.') return acc;
        if (part === '..') {
            acc.pop();
        } else {
            acc.push(part);
        }
        return acc;
    }, []).join('/');
};
