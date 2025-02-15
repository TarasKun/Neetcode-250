const MyStack = function() {
    this.stack = [];
};

MyStack.prototype.push = function(x) {
    this.stack.push(x);

    for (let i = 0; i < this.stack.length - 1; i++) {
        this.stack.push(this.stack.shift());
    }
};

MyStack.prototype.pop = function() {
    return this.stack.shift();
};

MyStack.prototype.top = function() {
    return this.stack[0];
};

MyStack.prototype.empty = function() {
    return this.stack.length === 0;
};