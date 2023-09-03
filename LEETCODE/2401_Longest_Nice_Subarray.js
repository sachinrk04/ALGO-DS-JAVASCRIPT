function longestNiceSubarray(nums) {
  let result = 0;
  let usedBits = 0;
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    while ((usedBits & nums[i]) > 0) {
      usedBits ^= nums[j];
      j++;
    }
    usedBits |= nums[i];
    result = Math.max(result, i - j + 1);
  }

  return result;
}

const array = [1, 3, 8, 48, 10];
console.log(longestNiceSubarray(array));
// Output: 3
