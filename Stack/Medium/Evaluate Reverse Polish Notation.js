// Stack solution with switch-case
// Time complexity: O(n)
// Space complexity: O(n)

const evalRPN = tokens => {
    const stack = [];
    
    for (const token of tokens) {
        if (token === '+' || token === '-' || token === '*' || token === '/') {
            const b = stack.pop();
            const a = stack.pop();
            if (token === '+') stack.push(a + b);
            else if (token === '-') stack.push(a - b);
            else if (token === '*') stack.push(a * b);
            else if (token === '/') {
                const res = a / b;
                stack.push(res < 0 ? Math.ceil(res) : Math.floor(res));
            }
        } else {
            stack.push(Number(token));
        }
    }
    
    return stack[0];
};

// Stack solution with operators map
// Time complexity: O(n)
// Space complexity: O(n)

const evalRPNMap = tokens => {
    const stack = [];
    const ops = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    };

    for (const token of tokens) {
        if (ops[token]) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(ops[token](a, b));
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
};
