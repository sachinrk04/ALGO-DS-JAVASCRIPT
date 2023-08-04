function maxProfit(prices) {
    let left = 0;
    let right = 1;
    let value = 0;

    while (right < prices.length) {
        if (prices[right] <= prices[left]) {
            left = right;
        }
        
        value = Math.max(value, prices[right] - prices[left]);
        right++;
    }
    return value;
};

const prices = [7, 1, 5, 3, 6, 4];
const output = maxProfit(prices);
console.log("output--->", output);
// Output: 5