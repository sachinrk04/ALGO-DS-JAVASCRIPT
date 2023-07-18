function subarraysDivByK(nums, k) {
    let result = 0;
    let sum = 0;
    let map = new Map();

    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum  = (sum + nums[i]) % k;

        if (sum < 0) {
            sum += k;
        }

        if (map.has(sum)) {
            result += map.get(sum);
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1);
        }
    }

    return result;
};

const nums = [4, 5, 0, -2, -3, 1];
const k = 5;

console.log(subarraysDivByK(nums, k));