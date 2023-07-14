function checkSubarraySum(nums, k) {
    const map = new Map();
    let sum = 0;

    map.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if ( k !== 0) {
            sum %= k;
        }

        if (map.has(sum)) {
            if (i - map.get(sum) > 1) {
                return true;
            } 
        } else {
            map.set(sum, i);
        }
    };

    return false;
}

const nums = [23, 2, 4, 6, 7];
const k = 6;

console.log(checkSubarraySum(nums, k));