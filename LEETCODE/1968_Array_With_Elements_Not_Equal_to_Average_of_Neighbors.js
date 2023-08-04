// Question-------
// To create an array with elements not equal to the average of their neighbors in JavaScript, you can 
// use a simple loop to iterate through the input array and modify the elements accordingly.Here's 
// the algorithm:

// Approach-------

// 1. Initialize a new array result to store the modified elements.
// 2. Iterate through the original array, starting from the second element up to the second-to-last 
//    element.
// 3. For each element at index i, check if it is equal to the average of its neighbors (nums[i-1] 
//    and nums[i + 1]).
// 4. If it is equal to the average, modify the element by adding 1 to it.
// 5. Otherwise, keep the element unchanged.
// 6. Add the modified or unchanged element to the result array.
// 7. Handle the first and last elements separately since they only have one neighbor.

// Complexity-------
// The time complexity of this algorithm is O(n), where 'n' is the number of elements in the input 
// array nums.We traverse the array once to modify the elements. 

// The space complexity is also O(n) because we create a new array to store the modified elements.

function modifyArray(nums) {
  if (nums.length <= 2) return nums;

  nums.sort((a, b) => a - b);
  let result = [];
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    result.push(nums[left]);
    result.push(nums[right]);
    left++;
    right--;
  }

  if (left === right) {
    result.push(nums[left]);
  }
  return result;
}

const nums = [1, 3, 5, 7, 9];
const modifiedArray = modifyArray(nums);
console.log("output---->", modifiedArray);

