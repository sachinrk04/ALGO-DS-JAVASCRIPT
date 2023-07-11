/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Time O(N) | Space O(N)
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let l = 0;
    let max = 0;

    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        max = Math.max(max, set.size);
    }
    return max;
};


function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let left = 0;
    const charMap = new Map();
  
    for (let right = 0; right < s.length; right++) {
      const currentChar = s[right];
  
      if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
        left = charMap.get(currentChar) + 1;
      }
  
      charMap.set(currentChar, right);
      maxLength = Math.max(maxLength, right - left + 1);
    }
  
    return maxLength;
}