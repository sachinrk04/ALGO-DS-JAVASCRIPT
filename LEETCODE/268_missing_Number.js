//The bitwise XOR assignment (^=) operator performs 
// bitwise XOR on the two operands and assigns the result 
// to the left operand.

// x ^= y is equivalent to x = x ^ y

function missingNumber(nums) {
    let result
    for (let i = 0; i < nums.length; i++) {
        const xor = (i ^ nums[i]);
        result = result ^ xor;
    }

    return result;
}

const nums = [3, 0, 1];
missingNumber(nums);
// 2