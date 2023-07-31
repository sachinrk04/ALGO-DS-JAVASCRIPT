// Approch

// 1. Divide the string into groups of "k" characters.
// 2. Reverse each group of "k" characters.
// 3. Concatenate the reversed groups back together to form the final result.

// Complexity Analysis:

// Time Complexity: The algorithm iterates through the entire string, but within each iteration, 
// it reverses only "k" characters.So the time complexity is O(n), where n is the length of the 
// input string.

// Space Complexity: The algorithm uses an array of characters to perform the reversal, so the space 
// complexity is O(n), where n is the length of the input string.

function reverseString(str, k) {
    const len = str.length
    const arr = str.split("");

    for (let i = 0; i < len; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, len - 1);

        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        };
    };

    return arr.join("");
};

const s = "abcdefg";
const k = 2;

const output = reverseString(s, k);
console.log("output--->", output);
// bacdfeg