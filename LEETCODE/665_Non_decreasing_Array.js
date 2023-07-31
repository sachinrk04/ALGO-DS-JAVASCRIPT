// Problem

// Given an array nums with n integers, your task is to check if it could become non-decreasing by 
// modifying at most one element.

// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) 
// such that(0 <= i <= n - 2).

// Approch-----------------

// 1. Initialize a variable modCount to keep track of the number of modifications made to the array. 
//    Set it to 0 initially.
// 2. Iterate through the array from index 1 to n - 1.
// 3. If nums[i] is less than nums[i - 1], it violates the non-decreasing property.
//      a. If i is the second element (i.e., i === 1), update nums[i] to be equal to nums[i - 1].
//      b. If i is greater than 1 (i.e., i > 1), check if nums[i] is greater than or equal to nums[i - 2].
//          .If true, update nums[i - 1] to be equal to nums[i].
//          .If false, update nums[i] to be equal to nums[i - 1].
//      c. Increment modCount for each modification made.
// 4. After the loop, if modCount is less than or equal to 1, return true since it's possible to make 
//    at most one modification to make the array non - decreasing.Otherwise, return false.

// Complexity Analysis:

// Time Complexity: The function iterates through the array once, making a single pass. Therefore, 
// the time complexity is O(n), where n is the length of the input array.

// Space Complexity: The algorithm uses only a constant amount of additional space for variables. 
// Thus, the space complexity is O(1), which means it's a constant space algorithm.

function checkPossibility(nums) {
    let modCount = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            modCount++;
            if (i === 1 || nums[i] >= nums[i - 2]) {
                nums[i - 1] = nums[i];
            } else {
                nums[i] = nums[i - 1];
            }
        }
    }
    return modCount <= 1;
}

const nums = [4,2,3];
const output = checkPossibility(nums);
console.log("output--->", output);