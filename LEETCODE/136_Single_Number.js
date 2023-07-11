function singleNumber(nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num;
    }

    return result;
}

const nums = [2,2,1];
singleNumber(nums);
// 1