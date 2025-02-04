const MyHashSet = function() {
    this.hashSet = {};
};

MyHashSet.prototype.add = function(key) {
    this.hashSet[key] = null;
};

MyHashSet.prototype.remove = function(key) {
    delete this.hashSet[key];
};

MyHashSet.prototype.contains = function(key) {
    return this.hashSet.hasOwnProperty(key) // or key in this.hashSet;
};