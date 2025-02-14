const mySqrt = function(x) {
    let left = 0;
    let right = x;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (middle * middle > x)  {
            right = middle - 1;
            continue;
        }

        if (middle * middle < x)  {
            left = middle + 1;
            continue;
        }

        return middle;
    }

    return left - 1;
};
