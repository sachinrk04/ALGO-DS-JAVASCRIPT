// Approach------

// To merge two sorted arrays into one sorted array in JavaScript, you can use a simple two-pointer 
// approach.Here's the algorithm:

// 1. Initialize three pointers, i, j, and k, where i and j point to the last elements of the two 
//    input arrays, and k points to the last available position in the resulting merged array.
// 2. Compare the elements at nums1[i] and nums2[j], and place the larger one at nums1[k].
// 3. Decrement the corresponding pointer (i, j, or k) and repeat the comparison until all elements 
//    from both arrays are merged.
// 4. If there are remaining elements in nums2, copy them to the front of nums1.

function merge(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for the merged array (nums1)


    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    };

    // Copy the remaining elements from nums2 to nums1 (if any)
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    };
};

const nums1 = [1, 3, 5, 0, 0, 0]; // Input sorted array with additional space for merging
const m = 3; // Number of elements in nums1
const nums2 = [2, 4, 6]; // Input sorted array
const n = 3; // Number of elements in nums2

merge(nums1, m, nums2, n);
console.log("output---->", nums1);
// Output: [1, 2, 3, 4, 5, 6] (merged sorted array)
