function minCostClimbingStairs(cost) {
  let n = cost.length;
  if (n === 0) return 0;
  if (n === 1) return cost[0];

  let first = cost[0];
  let second = cost[1];

  for (let i = 2; i < n; i++) {
    let temp = cost[i] + Math.min(first, second);
    first = second;
    second = temp;
  }

  return Math.min(first, second);
}

// Example usage
const cost1 = [10, 15, 20];
const cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost1)); // Output: 15
console.log(minCostClimbingStairs(cost2)); // Output: 6
