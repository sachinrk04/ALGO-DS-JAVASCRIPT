// Question---------
// You are given two strings word1 and word2.Merge the strings by adding letters in alternating order,
// starting with word1.If a string is longer than the other, append the additional letters onto the end 
// of the merged string.

// Return the merged string.

// Approch------------

// 1. Initialize two pointers, i and j, both starting at 0, to track the current character position 
//    in each string.
// 2. Initialize an empty result string to store the merged output.
// 3. While both pointers are within the bounds of their respective strings, add the characters at 
//    i and j positions to the result string alternately.
// 4. If one of the pointers reaches the end of its string, append the remaining characters from the 
//    other string to the result.
// 5. Return the merged result string.

// Complexity----------

// The time complexity of this algorithm is O(n + m), where 'n' and 'm' are the lengths of word1 and
// word2, respectively.This is because we traverse both strings once.The space complexity is O(n + m) 
// as well, due to the space used to store the merged result, which could be the combined length of 
// both input strings if there are no shared characters.

function mergeAlternately(word1, word2) {
    let wordOne = 0;
    let wordTwo = 0;
    let result = "";

    while (wordOne < word1.length && wordTwo < word2.length) {
        result += word1[wordOne];
        result += word2[wordTwo];

        wordOne++;
        wordTwo++;
    };

    result += word1.slice(wordOne);
    result += word2.slice(wordTwo);

    return result;
};

const word1 = "abc";
const word2 = "defgh";
const merged = mergeAlternately(word1, word2);
console.log("merged--->", merged);
// Output: "adbecfgh"