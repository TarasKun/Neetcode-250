// Monotonic Stack of [price, span] pairs solution
// Time complexity: O(1) average
// Space complexity: O(n)

class StockSpanner {
    constructor() {
        this.stack = []; // elements are [price, span]
    }

    next(price) {
        let span = 1;
        
        while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
            span += this.stack.pop()[1];
        }
        
        this.stack.push([price, span]);
        return span;
    }
}

// Prototype-based Monotonic Stack solution
// Time complexity: O(1) average
// Space complexity: O(n)

const StockSpannerProto = function() {
    this.stack = [];
};

StockSpannerProto.prototype.next = function(price) {
    let span = 1;
    
    while (this.stack.length > 0 && this.stack[this.stack.length - 1].price <= price) {
        span += this.stack.pop().span;
    }
    
    this.stack.push({ price, span });
    return span;
};
