// To find the minimum difference between the highest and lowest K scores in JavaScript,
// you can follow these steps:

// Approch---------

// 1. Sort the given scores array in ascending order.
// 2. Initialize a variable to keep track of the minimum difference.
// 3. Iterate through the sorted scores array, considering each group of K consecutive scores.
// 4. For each group, calculate the difference between the highest and lowest score in that group 
//    and update the minimum difference if it's smaller.
// 5. Continue the iteration until you reach the end of the array.

// Complexity----------

// The time complexity of this algorithm is O(n log n), where 'n' is the number of elements in the 
// scores array.This is due to the sorting step, which dominates the time complexity.
// The space complexity is O(1) because we only use a constant amount of extra space for the 
// minimum difference variable and loop counters.

function minimumDifference(nums, k) {
    if (nums.length <= 1 || k === 1) return 0; // Edge case: k is 1 or array has 0 or 1 element.

    nums.sort((a, b) => a - b); // Sort the array in ascending order.
    let minDifference = Number.MAX_SAFE_INTEGER; // Initialize the minimum difference.

    for (let i = 0; i <= nums.length - k; i++) {
        const currentDifference = nums[i + k - 1] - nums[i]; // Calculate the difference for the current group.
        minDifference = Math.min(minDifference, currentDifference); // Update the minimum difference if needed.
    }

    return minDifference;
};

const scores = [90, 83, 78, 93, 85];
const k = 3;
const minDiff = minimumDifference(scores, k);
console.log("minDiff------>", minDiff);
// Output: 6 (The minimum difference is between scores 90 and 78)

