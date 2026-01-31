// Frequency Map + Group Map of stacks solution
// Time complexity: O(1) for push, O(1) for pop
// Space complexity: O(n)

class FreqStack {
    constructor() {
        this.freq = new Map();
        this.group = new Map();
        this.maxFreq = 0;
    }

    push(val) {
        const f = (this.freq.get(val) || 0) + 1;
        this.freq.set(val, f);
        
        if (f > this.maxFreq) {
            this.maxFreq = f;
        }
        
        if (!this.group.has(f)) {
            this.group.set(f, []);
        }
        this.group.get(f).push(val);
    }

    pop() {
        const stack = this.group.get(this.maxFreq);
        const val = stack.pop();
        
        this.freq.set(val, this.freq.get(val) - 1);
        
        if (stack.length === 0) {
            this.maxFreq--;
        }
        
        return val;
    }
}

// Prototype-based implementation
// Time complexity: O(1) for push, O(1) for pop
// Space complexity: O(n)

const FreqStackProto = function() {
    this.freq = {};
    this.group = {};
    this.maxFreq = 0;
};

FreqStackProto.prototype.push = function(val) {
    const f = (this.freq[val] || 0) + 1;
    this.freq[val] = f;
    
    if (f > this.maxFreq) {
        this.maxFreq = f;
    }
    
    if (!this.group[f]) {
        this.group[f] = [];
    }
    this.group[f].push(val);
};

FreqStackProto.prototype.pop = function() {
    const stack = this.group[this.maxFreq];
    const val = stack.pop();
    
    this.freq[val]--;
    
    if (stack.length === 0) {
        this.maxFreq--;
    }
    
    return val;
};
