// Approch-------

// 1. Iterate through the array and move each number to its correct position 
//    (i.e., nums[i] should be at index nums[i] - 1). Use a swap method to do this.
// 2. After rearranging the numbers, the duplicates will be at their correct positions, 
//    and the missing numbers will be at the positions with the wrong numbers.
// 3. Iterate through the array again to find the duplicates and missing numbers based 
//    on their positions.


// Complexity Analysis:

// Time Complexity: The algorithm iterates through the array twice. In the first loop, 
// each number is moved to its correct position.This takes O(n) time.The second loop 
// runs for another O(n) time to find the duplicates and missing numbers based on the 
// positions.Therefore, the overall time complexity is O(n).

// Space Complexity: The algorithm uses only a constant amount of additional space for 
// variables.The output arrays for duplicates and missing numbers can take up to O(n) 
// space.Therefore, the overall space complexity is O(n).

function findDuplicatesAndMissingNumbers(nums) {
    const n = nums.length;
    const duplicates = [];
    const missing = [];

    // Helper function to swap elements at indices i and j
    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    // Iterate through the array and move each number to its correct position
    for (let i = 0; i < n; i++) {
        while (nums[i] !== i + 1 && nums[nums[i] - 1] !== nums[i]) {
            swap(nums, i, nums[i] - 1);
        }
    }

    // Find the duplicates and missing numbers based on their positions
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            duplicates.push(nums[i]);
            missing.push(i + 1);
        }
    }

    return [duplicates, missing];
}

const nums = [4, 3, 2, 7, 8, 2, 1, 1];
const result = findDuplicatesAndMissingNumbers(nums);
console.log("Duplicates:", result[0]); // Output: Duplicates: [2, 1]
console.log("Missing:", result[1]); // Output: Missing: [5, 6]
