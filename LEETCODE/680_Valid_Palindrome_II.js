// Question----------
// To check if a given string is a valid palindrome or can be turned into a palindrome by removing at 
// most one character, you can use a two - pointer approach.Here's the algorithm:

// Approch--------

// 1. Initialize two pointers, left and right, where left starts at the beginning of the string, 
//    and right starts at the end of the string.
// 2. While left is less than right, compare the characters at positions left and right.
//      a. If the characters are the same, move left one step right and right one step left.
//      b. If the characters are different, check if the substring formed by excluding the character 
//         at left is a palindrome or the substring formed by excluding the character at right is a 
//         palindrome.If either of these substrings is a palindrome, return true.
// 3. If the loop completes without finding any mismatched characters, then the string itself is a 
//    palindrome, so return true.

// Complexity-------
// The time complexity of this algorithm is O(n), where 'n' is the length of the input string s. 
// The two - pointer approach traverses the string once, and the palindrome check for the two possible 
// substrings(after removing one character) can be done in constant time for each comparison.

// The space complexity is O(1) because the algorithm only uses a constant amount of extra space for 
// the pointers and loop variables.

function validPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    while (left < right) {
        if (s[left !== s[right]]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }

    return true;
};

console.log("output---->", validPalindrome("aba"));
// output: true