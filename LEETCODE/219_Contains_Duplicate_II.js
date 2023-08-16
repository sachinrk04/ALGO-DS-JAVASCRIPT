function containsNearbyDuplicate(nums, k) {
    const map = new Map(); // Map to store the last index of each number

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (map.has(num) && i - map.get(num) <= k) {
            return true; // Found a duplicate within the specified range
        }

        map.set(num, i);
    };

    return false; // No duplicate found within the specified range
}

const nums = [1,2,3,1];
const k = 3;
const output = containsNearbyDuplicate(nums, k)
console.log("output--->", output);
// Output: true