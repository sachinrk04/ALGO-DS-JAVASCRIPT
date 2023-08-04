function moveZeroes(nums) {
    let positive = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[positive] = nums[i];
            positive++;
        }
    }

    for (let i = positive; i < nums.length; i++) {
        nums[i] = 0;
    }
};

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // [1, 3, 12, 0, 0]