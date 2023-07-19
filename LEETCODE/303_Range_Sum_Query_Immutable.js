class NumArray {
    constructor(nums) {
        this.prefixSum = [0];
        for (let i = 0; i < nums.length; i++) {
            this.prefixSum[i + 1] = this.prefixSum[i] + nums[i]
        }
    }
}

NumArray.prototype.sumRange = function(left, right) {
    return this.prefixSum[right + 1] - this.prefixSum[left];
}

const nums = [-2, 0, 3, -5, 2, -1];
const numArray = new NumArray(nums);
const sum_range = numArray.sumRange(0, 2);
console.log("sum_range---->", sum_range)