// [10,1,5,6,7,1]
const maxProfit = (prices) => {
    let profit = 0;
    let left = 0;
    let right = 1;

    while (right < prices.length) {
        if (prices[right] > prices[left]) {
            profit = Math.max(profit, prices[left] - prices[right]);
        } else {
            left = right;
        }

        right++;
    }

    return profit;
}