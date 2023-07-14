function numSubarrayProductLessThanK(nums, k) {
    if (k <= 1) return 0;
    let result = 0;
    let prod = 1;
    let map = 0;

    for (let i = 0; i < nums.length; i++) {
        prod *= nums[i];
        while (prod >= k) {
            prod /= nums[map];
            map++;
        }
        result += i - map + 1;
    }
    return result;
};

const nums = [10, 2, 5, 6];
const k = 100;
console.log(numSubarrayProductLessThanK(nums, k));
