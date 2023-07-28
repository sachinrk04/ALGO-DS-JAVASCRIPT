// Wiggle sort : Given an integer array a, reorder it such that 
// a[0] <= a[1] >= a[2] <= a[3]… on

// Time Complexity: O(n log n)
// Space Complexity: O(1)

function wiggleSort (nums) {
    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length - 1; i += 2) {
        swap(nums, i, i + 1);
    }
};

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const nums = [3, 5, 2, 1, 6, 4];
wiggleSort(nums);
console.log(nums); 

// Output: [1, 6, 2, 5, 3, 4] or [2, 6, 1, 5, 3, 4] or any other valid wiggle sort.