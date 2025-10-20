// Binary Search on list of timestamp-value pairs solution
// Time complexity: O(1) for set, O(log n) for get
// Space complexity: O(n)

class TimeMap {
    constructor() {
        this.map = new Map();
    }

    set(key, value, timestamp) {
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }
        this.map.get(key).push({ value, timestamp });
    }

    get(key, timestamp) {
        if (!this.map.has(key)) {
            return "";
        }
        
        const list = this.map.get(key);
        let left = 0;
        let right = list.length - 1;
        let res = "";
        
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (list[mid].timestamp <= timestamp) {
                res = list[mid].value;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return res;
    }
}

// Prototype-based Binary Search solution
// Time complexity: O(1) for set, O(log n) for get
// Space complexity: O(n)

const TimeMapProto = function() {
    this.map = {};
};

TimeMapProto.prototype.set = function(key, value, timestamp) {
    if (!this.map[key]) {
        this.map[key] = [];
    }
    this.map[key].push({ value, timestamp });
};

TimeMapProto.prototype.get = function(key, timestamp) {
    const list = this.map[key];
    if (!list) {
        return "";
    }
    
    let left = 0;
    let right = list.length - 1;
    let res = "";
    
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (list[mid].timestamp <= timestamp) {
            res = list[mid].value;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return res;
};
