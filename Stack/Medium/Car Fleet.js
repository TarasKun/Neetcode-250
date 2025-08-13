// Sort and Stack solution
// Time complexity: O(n log n)
// Space complexity: O(n)

const carFleet = (target, position, speed) => {
    const n = position.length;
    const cars = [];
    
    for (let i = 0; i < n; i++) {
        cars.push({
            pos: position[i],
            time: (target - position[i]) / speed[i]
        });
    }
    
    // Sort cars by position descending (from closest to target to farthest)
    cars.sort((a, b) => b.pos - a.pos);
    
    const stack = [];
    
    for (const car of cars) {
        if (stack.length === 0 || car.time > stack[stack.length - 1]) {
            stack.push(car.time);
        }
    }
    
    return stack.length;
};

// Sort and O(1) Space solution
// Time complexity: O(n log n)
// Space complexity: O(n) (for sorting array)

const carFleetOptimized = (target, position, speed) => {
    const n = position.length;
    const cars = [];
    
    for (let i = 0; i < n; i++) {
        cars.push({
            pos: position[i],
            time: (target - position[i]) / speed[i]
        });
    }
    
    cars.sort((a, b) => b.pos - a.pos);
    
    let fleets = 0;
    let maxTime = 0;
    
    for (const car of cars) {
        if (car.time > maxTime) {
            fleets++;
            maxTime = car.time;
        }
    }
    
    return fleets;
};
