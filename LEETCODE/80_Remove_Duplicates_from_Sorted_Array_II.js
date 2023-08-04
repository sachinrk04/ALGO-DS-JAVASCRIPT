// Approach------ Question no. 26
// To remove duplicates from a sorted array in JavaScript while allowing each unique element to appear 
// at most twice, you can use a two - pointer approach.The idea is similar to the previous two - pointer
// approach, but with a small modification to handle duplicates up to two occurrences.

// Complexity

// The time complexity of this algorithm is O(n), where 'n' is the number of elements in the array. 
// We traverse the array once using the two - pointer approach.The space complexity is O(1) because we 
// are modifying the input array in place and using a constant amount of extra space for the pointers.

function removeDuplicates(nums) {
    // No duplicates possible if array length is 0, 1, or 2.
    if (nums.length <= 2) return nums.length;

    // Start the pointer at index 2 (since we allow at most two occurrences).
    let i = 2;

    for (let j = 2; j < nums.length; j++) {
        if (nums[j] !== nums[i - 2]) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;
};

const nums = [1, 1, 1, 2, 2, 3];
const uniqueCount = removeDuplicates(nums);
console.log(uniqueCount);
// Output: 5 (number of unique elements after duplicates removal)
console.log(nums.slice(0, uniqueCount));
// Output: [1, 1, 2, 2, 3] (modified array with duplicates removed)
