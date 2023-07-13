function majorityElement(nums) {
    let result;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            result = num;
            count = 1;
        } else if (result === num) {
            count++;
        } else {
            count--
        }
    }

    return result;
};

const nums = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums));