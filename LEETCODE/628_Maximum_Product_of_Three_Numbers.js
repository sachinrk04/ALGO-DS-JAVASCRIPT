function maximumProduct(nums) {
    nums.sort((a, b) => a - b);

    let len = nums.length;
    let prod1 = nums[len - 1] * nums[len - 2] * nums[len - 3];
    let prod2 = nums[0] * nums[1] * nums[len - 1];

    return Math.max(prod1, prod2);
};

const nums = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
maximumProduct(nums);
// Output: 48