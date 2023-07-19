function findDisappearedNumbers(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]);
        if (nums[num - 1] > 0) {
            nums[num - 1] *= -1;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1)
        }
    }

    return result;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(findDisappearedNumbers(nums)); 
// Output: [5, 6]