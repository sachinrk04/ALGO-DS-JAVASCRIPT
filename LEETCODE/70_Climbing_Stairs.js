// Method-1
function climbStairs_M1(n) {
  if (n <= 1) return 1;

  let dw = [1, 1];

  for (let i = 2; i <= n; i++) {
    dw[i] = dw[i - 1] + dw[i - 2];
  }

  return dw[n];
}

// Example usage
console.log(climbStairs_M1(2)); // Output: 2
console.log(climbStairs_M1(3)); // Output: 3
console.log(climbStairs_M1(4)); // Output: 5
console.log(climbStairs_M1(5)); // Output: 8

// Method-2
function climbStairs_M2(n) {
  if (n <= 1) return 1;

  let first = 1;
  let second = 1;

  for (let i = 2; i <= n; i++) {
    let temp = first + second;
    first = second;
    second = temp;
  }

  return second;
}

// Example usage
console.log(climbStairs_M2(2)); // Output: 2
console.log(climbStairs_M2(3)); // Output: 3
console.log(climbStairs_M2(4)); // Output: 5
console.log(climbStairs_M2(5)); // Output: 8
