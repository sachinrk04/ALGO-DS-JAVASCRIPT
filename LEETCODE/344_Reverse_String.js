// Approch
// 1. Initialize two pointers, let's call them "left" and "right".
// 2. "left" starts at the beginning of the string (index 0), and "right" starts at the end of the string (index length - 1).
// 3. Swap the characters at the "left" and "right" positions.
// 4. Move the "left" pointer one step to the right (increment by 1).
// 5. Move the "right" pointer one step to the left (decrement by 1).
// 6. Repeat steps 3 to 5 until the "left" pointer is greater than or equal to the "right" pointer.

// Time Complexity: The algorithm iterates through half of the string, so the time complexity is O(n/2), 
// which simplifies to O(n), where n is the length of the input string.

// Space Complexity: The algorithm uses an array of characters to perform the swap, so the space 
// complexity is O(n), where n is the length of the input string.

function reverseString(s) {
    let arr = s.split("");

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr.join("");
};

const s = ["h", "e", "l", "l", "o"];
const output = reverseString(s);
console.log("output--->", output);