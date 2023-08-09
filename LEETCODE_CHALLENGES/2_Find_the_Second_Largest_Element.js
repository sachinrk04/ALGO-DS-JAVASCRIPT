// Question------
// Find the Second Largest Element in an Array using JavaScript?

// Approach------

// In this approach, we will traverse the whole array using a for loop and keep track of the largest
// and the second largest element at each iteration.

// We will use the below algorithm:

// 1. Create two variables largest and secondLargest and initialize them with the minimum possible 
//    value i.e - Infinity.
// 2. Start traversing the array from the very first element:
        // . Check if the current element is greater than the value stored in the largest variable.
        //   If yes, copy the value of largest into secondLargest and update the largest to current
        //   element i.e.secondLargest = largest and largest = currentElement.
        // . If the current element is greater than the value stored in secondLargest and less than
        //   the largest, update the value of the secondLargest to current element.
// 3. If secondLargest is not equal to -Infinity, it means the second largest exists in the array. 
//    Print its value.

function secondLargetNo(nums) {
    if (nums.length < 2) return "Not exist!";
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] < largest && nums[i] > secondLargest) {
            secondLargest = nums[i];
        }
    }

    return secondLargest;
}

const nums = [1, 4, 5, 6, 8, 5, 40, 50, 20];
console.log(secondLargetNo(nums));
