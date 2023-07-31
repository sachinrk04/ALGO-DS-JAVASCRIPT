// Approch-------

// you can use a prefix sum technique. The algorithm involves counting the occurrences 
// of the prefix sum in the array while traversing it.Since a zero - filled subarray will 
// have the same prefix sum at the beginning and end, the difference in their positions 
// will give us the number of zero - filled subarrays in between.


// Complexity Analysis:

// Time Complexity: The algorithm iterates through the array once, making a single pass. 
// Therefore, the time complexity is O(n), where n is the length of the input array.

// Space Complexity: The algorithm uses a hash map to store the prefix sum counts, which 
// can take up to O(n) space.Thus, the space complexity is O(n).


function countZeroFilledSubarrays(nums) {
    const map = new Map();
    let prefixSum = 0;
    let result = 0;

    // Initialize prefix sum counts with the first prefix sum of 0
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            prefixSum += nums[i];
        } else {
            prefixSum -= nums[i];
        }

        // Check if the prefix sum has occurred before
        if (map.has(prefixSum)) {
            result += map.get(prefixSum);
        }

        // Update the prefix sum count
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return result;
};

const nums = [0,0,0,2,0,0];
console.log(countZeroFilledSubarrays(nums)); // Output: 10
