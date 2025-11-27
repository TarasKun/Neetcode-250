// Greedy Two Pointers solution
// Time complexity: O(n log n)
// Space complexity: O(log n) to O(n) (for sorting)

const numRescueBoats = (people, limit) => {
    people.sort((a, b) => a - b);
    let left = 0;
    let right = people.length - 1;
    let boats = 0;
    
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
        }
        right--;
        boats++;
    }
    
    return boats;
};

// Counting Sort / Bucket Sort solution
// Time complexity: O(n + limit)
// Space complexity: O(limit)

const numRescueBoatsCounting = (people, limit) => {
    const buckets = new Array(limit + 1).fill(0);
    for (const p of people) {
        buckets[p]++;
    }
    
    let left = 1;
    let right = limit;
    let boats = 0;
    
    while (left <= right) {
        while (left <= right && buckets[left] <= 0) left++;
        while (left <= right && buckets[right] <= 0) right--;
        
        if (left > right) break;
        
        boats++;
        if (left + right <= limit) {
            buckets[left]--;
            buckets[right]--;
        } else {
            buckets[right]--;
        }
    }
    
    return boats;
};
