const shipWithinDays = (weights, days) => {
    // [1,2,3,4,5]
    let minCapacity = Math.max(...weights); // 5
    let maxCapacity = weights.reduce((weight, acc) => weight + acc); // 15

    while (minCapacity < maxCapacity) {
        const capacity = Math.floor((minCapacity + maxCapacity) / 2); // 10
        let currentDays = 1;
        let load = 0;

        for (const weight of weights) {
            load += weight; // 1 -> 3 -> 6 -> 10 -> 15

            if (load > capacity) {
                currentDays++;
                load = weight;
            }
        }

        if (currentDays > days) {
            minCapacity = capacity + 1;
        } else maxCapacity = capacity;
    }

    return minCapacity;
};