// Approch-------
// First, you need to rearrange the array in such a way that all positive integers from 1 
// to n(where n is the size of the array) are placed at their correct indices.For example, 
// the number 1 should be at index 0, the number 2 should be at index 1, and so on.

// Once the rearrangement is done, you can then loop through the array to find the first 
// index(starting from 0) where the value at that index does not match the expected 
// positive integer(i.e., the index + 1).

// Complexity-------

// The algorithm rearranges the array in place with O(n) complexity, and then it loops 
// through the array once more with O(n) complexity to find the first missing positive 
// integer.Thus, the overall complexity of the algorithm is O(n).

// The provided algorithm also has a space complexity of O(1) because it uses only a 
// constant amount of extra space regardless of the input size.

function firstMissingPositive(nums) {
    const n = nums.length;

    // Step 1: Rearrange the array
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // Swap numbers to their correct positions
            const temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }

    // Step 2: Find the first missing positive integer
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return n + 1;
};

const nums = [3, 4, -1, 1];
const output = firstMissingPositive(nums);
console.log("output---->", output);