const minEatingSpeed = (piles, h) => {
    // piles = [1,4,3,2], h = 9
    let left = 1;
    let right = Math.max(...piles);
    let res = right;

    while (left <= right) {
        const k = Math.floor((left + right) / 2);
        let totalTime = 0;

        for (const pile of piles) {
            totalTime += Math.ceil(pile / k)
        }

        if (totalTime <= h) {
            res = k;
            right = k - 1;

            continue;
        }

        left = k + 1;
    }

    return res;
}