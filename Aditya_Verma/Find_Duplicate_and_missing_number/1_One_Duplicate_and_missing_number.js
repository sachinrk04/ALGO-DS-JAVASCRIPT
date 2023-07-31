// Given an unsorted array of size n. Array elements are in the range from 
// 1 to n.One number from set { 1, 2, …n } is missing and one number occurs 
// twice in the array.Find these two numbers in order of one space.

// Input:[3 1 2 5 3] 

// Output:[3, 4] 

// Here's the algorithm:-------------------------------

// 1. Iterate through the array and calculate the sum of all elements and the sum of squares of all 
//    elements.
// 2. Calculate the expected sum and the expected sum of squares for the given array.
// 3. Find the difference between the expected sum and the actual sum, as well as the difference 
//    between the expected sum of squares and the actual sum of squares.
// 4. Using these differences, you can calculate the missing and repeated numbers.ed 
//    number = missingAndRepeatedDifference + missingNumber

function duplicateAndMissingNUmber(numbers) {
  const n = numbers.length;
  let sum = 0;
  let sumOfSquares = 0;

  for (let i = 0; i < n; i++) {
    sum += numbers[i];
    sumOfSquares += numbers[i] * numbers[i];
  }

  const expectedSum = (n * (n + 1)) / 2;
  const expectedSumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;

  const sumDifference = expectedSum - sum;
  const sumOfSquaresDifference = expectedSumOfSquares - sumOfSquares;

  const repeated = (sumOfSquaresDifference / sumDifference + sumDifference) / 2;
  const missing = repeated - sumDifference;

  return [repeated, missing];
}

const numbers = [3, 1, 2, 5, 3];
const output = duplicateAndMissingNUmber(numbers);
console.log("output--->", output);

