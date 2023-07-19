function maxSubArrayLen(nums, k) {
    const map = new Map();
    let maxLength = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum === k) {
            maxLength = i + 1; // Update maxLength if the whole subarray is the answer
        }

        if (map.has(sum - k)) {
            maxLength = Math.max(maxLength, i - map.get(sum - k));
        }

        if (!map.has(sum)) {
            map.set(sum, i) // Store the earliest index for each sum
        }
    }

    return maxLength;
}

const nums = [1, -1, 5, -2, 3];
const k = 3;

console.log(maxSubArrayLen(nums, k)); 
// Output: 4