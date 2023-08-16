function longestNiceSubarray(nums) {
    const set = new Set(nums);
    let result = 0;

    for (const num of nums) {
        if (set.has(num * 2) || set.has(num / 2)) {
            let length = 1;

            let next = num * 2;
            while (set.has(next)) {
                length++;
                next *= 2;
            }

            next = num / 2;
            while (set.has(next)) {
                length++;
                next /= 2;
            }

            result = Math.max(result, length);
        }
    }

    return result;
};

const nums = [1, 3, 2, 2, 3, 1, 4, 7];
const output = longestNiceSubarray(nums);
console.log("output--->", output);
// Output: 5