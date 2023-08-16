function minSubArrayLen(target, nums) {
    let minLength = Infinity;
    let start = 0;
    let sum = 0;

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];

        while (sum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            sum -= nums[start];
            start++;
        }
    }

    return minLength !== Infinity ? minLength : 0;
}

const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
const output = minSubArrayLen(target, nums);
console.log("output--->", output);
// Output: 2