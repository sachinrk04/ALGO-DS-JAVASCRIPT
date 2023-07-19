function findDuplicates(nums) {
    const result = [];
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    };

    for (const num in map) {
        if (map[num] > 1) {
            result.push(parseInt(num, 10));
        }
    };

    return result;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums));

// Output: [2, 3]