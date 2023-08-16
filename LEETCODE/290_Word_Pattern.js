// Question:
// The word pattern problem involves determining whether a given pattern follows a one - to - one 
// correspondence with words in a string.Here's a JavaScript algorithm to solve the word pattern 
// problem, along with a complexity analysis:

// Complexity
// 1. Splitting the str into words takes O(n), where n is the length of the string.
// 2. The loop iterates through the pattern and words, performing constant - time operations 
//    inside the loop.
// 3. The operations involving maps(set, get, and has) are generally considered to be constant 
//    time on average.
// 4. Therefore, the overall time complexity of the algorithm is O(n), where n is the length of 
//    the string.

function wordPattern(pattern, str) {
    const patternToWord = new Map(); // To store mapping of pattern to word
    const wordToPattern = new Map(); // To store mapping of word to pattern
    
    const words = str.split(" ");

    if (pattern.length !== words.length) {
        return false; // Different pattern and word count
    }

    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i];
        const word = words[i];

        if (!patternToWord.has(p) && !wordToPattern.has(word)) {
            patternToWord.set(p, word);
            wordToPattern.set(word, p);
        } else if (patternToWord.get(p) !== word || wordToPattern.get(word) !== p) {
            return false; // Mapping doesn't match
        }
    }

    return true; // All mappings match
};

const pattern = "abba";
const str = "dog cat cat dog";
const output = wordPattern(pattern, str);
console.log("output---->", output);
// Output: true
