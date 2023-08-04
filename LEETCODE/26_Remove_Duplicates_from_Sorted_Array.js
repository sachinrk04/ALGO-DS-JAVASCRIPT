// Approch-------

// To remove duplicates from a sorted array in JavaScript, you can use a two - pointer
// approach.Here's the algorithm:

// 1. Initialize two pointers, left and right, where left starts at 0, and right starts at 1.
// 2. While right is within the bounds of the array:
//      a. If the element at index left is equal to the element at index right, increment
//         right to skip duplicates.
//      b. If the element at index left is not equal to the element at index right, increment 
//         left by 1 and replace the element at index left with the element at index right.
// 3. The length of the modified array will be left + 1, which represents the unique elements.

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let left = 0;
    for (let right = 1; right < nums.length; right++) {
        if (nums[left] !== nums[right]) {
            left++;
            nums[left] = nums[right];
        }
    };

    return left + 1;
};

const nums = [1, 1, 2];
const output = removeDuplicates(nums);
console.log("output--->", output);
// 2