// Two stacks solution
// Time complexity: O(1)
// Space complexity: O(n)

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop() {
        const val = this.stack.pop();
        
        if (val === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// One stack of value-min pairs solution
// Time complexity: O(1)
// Space complexity: O(n)

class MinStackOneStack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        const min = this.stack.length === 0 ? val : Math.min(val, this.getMin());
        this.stack.push({ val, min });
    }

    pop() {
        this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1].val;
    }

    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}
