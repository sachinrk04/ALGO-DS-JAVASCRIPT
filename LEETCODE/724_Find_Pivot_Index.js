// Given an array of integers nums, calculate the pivot index of this array.

// In this algorithm, we iterate through the array twice.The first loop calculates the total 
// sum of the array, which takes O(n) time.The second loop iterates through the array again,
// updating the left sum and checking if the current index is a pivot index.This also takes O(n) time.
// Therefore, the overall time complexity of this algorithm is O(n).

function pivotIndex() {
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
            return i; // Found pivot index
        }

        leftSum += nums[i];
    };

    return -1;
};

const nums = [1, 7, 3, 6, 5, 6];
const output = pivotIndex(nums);
console.log("PivotIndex---->", output);
// Output: Pivot Index: 3
