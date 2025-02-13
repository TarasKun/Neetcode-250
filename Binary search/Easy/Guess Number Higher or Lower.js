const guessNumber = function(n) {
    let left = 0;
    let right = n - 1;

    // [-1,0,2,4,6,8] 6 - 0
    while (left <= right) {
        const middle = left + Math.floor((right - left)/2);

        if (guess(middle) === 1) {
            left = middle + 1;
            continue;
        }

        if (guess(middle) === -1) {
            right = middle - 1;
            continue;
        }

        return middle;
    }

    return left
};