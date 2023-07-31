// Approch
// To reverse the vowels of a string in JavaScript, you can use a two - pointer approach.T
// he algorithm involves iterating through the string from both ends(using two pointers) and 
// swapping the vowels found at each end until the pointers meet in the middle.

// Complexity Analysis:

// Time Complexity: The algorithm iterates through the string only once from both ends 
// (two - pointer approach).Therefore, the time complexity is O(n), where n is the length 
// of the input string.

// Space Complexity: The algorithm uses an array of characters to perform the swapping. 
// Since it doesn't use any additional data structures proportional to the input size, 
// the space complexity is O(1), which means it's a constant space algorithm.

function reverseVowels(str) {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    const arr = str.split("");
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (vowels.has(arr[left]) && vowels.has(arr[right])) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        } else if (vowels.has(arr[left])) {
            right--;
        } else {
            left++;
        }
    }

    return arr.join("");
};

const s = "hello"
const output = reverseVowels(s);
console.log("output--->", output);