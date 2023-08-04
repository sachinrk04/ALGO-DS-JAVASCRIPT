// Question --------
// Have the function ArrayChallenge(strArr) take the array of strings stored in strArr 
// and return the third largest word within it.So for example: if strArr is
// ["hello", "world", "before", "all"] your output should be world because "before" is 6 
// letters long, and "hello" and "world" are both 5, but the output should be world because 
// it appeared as the last 5 letter word in the array.If strArr was
// ["hello", "world", "after", "all"] the output should be after because the first three 
// words are all 5 letters long, so return the last one.The array will have at least three 
// strings and each string will only contain letters.

// Approch----
// To solve the Array Challenge and find the third largest word within the array of
// strings, you can follow these steps:

// 1. Sort the array in descending order of word lengths.
// 2. Return the third element from the sorted array.

function ThirdLargestWord(strArr) {
  // Step 1: Sort the array in descending order of word lengths
  strArr.sort((a, b) => b.length - a.length);

  // Step 2: Return the third element from the sorted array
  return strArr[2];
}

console.log(ThirdLargestWord(["hello", "world", "before", "all"]));
// Output: "world"
console.log(ThirdLargestWord(["hello", "world", "after", "all"]));
// Output: "after"
