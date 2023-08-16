function maxFrequency(nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let sum = 0;
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        while ((i - left + 1) * nums[i] - sum > k) {
            sum -= nums[left];
            left++;
        }

        result = Math.max(result, i - left + 1);
    }

    return result;
}

const nums = [1,2,4];
const k = 4;
const output = maxFrequency(nums, k);
console.log("output--->", output);
// Output: 2