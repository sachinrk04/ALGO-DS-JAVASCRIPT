function singleNumberII (nums) {
    let ones = 0;
    let twos = 0;

    for (let num of nums) {
        twos = (twos | (ones & num));
        ones = (ones ^ num);

        const common = (ones & twos);

        ones = ones & (~common);
        twos = twos & (~common);
    }

    return ones;
};

const nums = [2, 2, 3, 2];
console.log(singleNumberII(nums)); 
// Output: 3
