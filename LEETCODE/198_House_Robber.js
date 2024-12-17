function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let n = nums.length;
  let money = new Array(n).fill(0);

  money[0] = nums[0];
  money[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    money[i] = Math.max(money[i - 1], nums[i] + money[i - 2]);
  }

  return money[n - 1];
}

// Example usage
console.log(rob([1, 2, 3, 1])); // Output: 4
console.log(rob([2, 7, 9, 3, 1])); // Output: 12
