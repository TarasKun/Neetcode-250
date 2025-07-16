// Stack solution
// Time complexity: O(n)
// Space complexity: O(n)

const asteroidCollision = asteroids => {
    const stack = [];
    
    for (const asteroid of asteroids) {
        let alive = true;
        
        while (alive && asteroid < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
            const diff = stack[stack.length - 1] + asteroid;
            
            if (diff < 0) {
                // The right-moving asteroid is smaller, it explodes
                stack.pop();
            } else if (diff === 0) {
                // Both explode
                stack.pop();
                alive = false;
            } else {
                // The right-moving asteroid is larger, current asteroid explodes
                alive = false;
            }
        }
        
        if (alive) {
            stack.push(asteroid);
        }
    }
    
    return stack;
};
