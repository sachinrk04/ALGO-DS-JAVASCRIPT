function twoSumLessThanK(nums, k) {
    let maxSum = -1;
    let left = 0;
    let right = nums.length - 1;

    nums.sort((a, b) => a - b);

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum < k) {
            maxSum = Math.max(maxSum, sum);
            left++;
        } else {
            right--;
        }
    }

    return maxSum
};

const nums = [34, 23, 1, 24, 75, 33, 54, 8];
const k = 60;

console.log(twoSumLessThanK(nums, k));