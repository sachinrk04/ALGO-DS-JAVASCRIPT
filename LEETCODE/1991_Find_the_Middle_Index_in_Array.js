// Question
// To find the middle index in an array, you need to determine the index at which the sum of 
// elements to the left is equal to the sum of elements to the right. 

// Complexity
// The overall time complexity of this algorithm is O(n).

function findMiddleIndex(nums) {
    let totalSum = 0;
    let leftSum = 0;

    // Calculate the total sum of the array
    for (let num of nums) {
        totalSum += num;
    }

    for (let i = 0; i < nums.length; i++) {
        // Subtract the current element from the total sum to get the right sum
        totalSum -= nums[i];

        if (leftSum === totalSum) {
            return i; // Found middle index
        }

        // Add the current element to the left sum
        leftSum += nums[i];
    }

    return -1; // No middle index found
};

const nums = [2, 3, 1, 8, 4, 2];
const output = findMiddleIndex(nums);
console.log("output--->", output);
// Output: Middle Index: 3

