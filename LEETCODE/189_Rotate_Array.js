// Approch--------------

// 1. Calculate the effective number of rotations: Since rotating an array by its length 
//    (or a multiple of its length) results in the same array, you can reduce the number of rotations to be performed by taking the modulo of the number of steps with the array length.

// 2. Reverse the entire array: This will bring the last k elements (where k is the 
//    effective number of rotations) to the beginning of the array.

// 3. Reverse the first k elements: This will place the last k elements at the correct 
//    positions, effectively rotating the array.

// Algorithm Complexity:-------

// Time Complexity: The algorithm performs three reverse operations, each taking O(n) 
// time, where n is the number of elements in the array.Hence, the overall time complexity 
// is O(n).

// Space Complexity: The algorithm performs the rotations in-place without using any 
// additional data structures, so the space complexity is O(1).

function rotateArray(nums, k) {
    const n = nums.length;
    k %= n; // Effective number of rotations

    function rotate(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    
    // Step 1: Reverse the entire array
    rotate(nums, 0, n - 1);

    // Step 2: Reverse the first k elements
    rotate(nums, 0, k - 1);

    // Step 3: Reverse the remaining elements
    rotate(nums, k, n - 1);

    return nums;
}

// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const output = rotateArray(nums, k)
console.log("output---->", output);
// Output: [5, 6, 7, 1, 2, 3, 4]
