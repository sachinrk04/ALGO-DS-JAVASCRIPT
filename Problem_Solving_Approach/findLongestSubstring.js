// Sliding Window - findLongestSubstring

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest 
// substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

// Time Complexity - O(n)

const findLongestSubstring = str => {
    let result = 0;
    let map = {};
    let i = 0;

    for (let j = 0; j < str.length; j++) {
        let char = str[j];
        if (map[char]) i = Math.max(i, map[char]);
        result = Math.max(result, j - i + 1);
        map[char] = j + 1;
    }

    return result;
};