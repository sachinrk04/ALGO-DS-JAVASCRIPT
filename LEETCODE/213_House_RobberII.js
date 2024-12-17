function robLinear(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prev1 = 0;
  let prev2 = 0;

  for (let i = 0; i < nums.length; i++) {
    let current = Math.max(prev2, nums[i] + prev1);
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
}

function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let max1 = robLinear(nums.slice(0, nums.length - 1));
  let max2 = robLinear(nums.slice(1));

  return Math.max(max1, max2);
}

// Example usage
console.log(rob([2, 3, 2])); // Output: 3
console.log(rob([1, 2, 3, 1])); // Output: 4
console.log(rob([0])); // Output: 0
