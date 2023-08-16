// Question:
// To find the maximum number of times the word "balloon" can be formed using characters from a given
// string, you can follow this algorithm in JavaScript.The algorithm counts the frequency of each 
// required character for the word "balloon" and returns the minimum count among those characters.

// Complexity
// 1. The loop that iterates through the given text has a time complexity of O(n), where n is the 
//    length of the text.
// 2. he second loop iterates through the required characters, which is constant 
//    (5 characters: 'b', 'a', 'l', 'o', 'n').
// 3. Thus, the overall time complexity is O(n), where n is the length of the input text.

function maxNumberOfBalloons(text) {
    const requiredChars = {
        'b': 0,
        'a': 0,
        'l': 0,
        'o': 0,
        'n': 0
    };
    let result = Infinity;

    for (let char of text) {
        if (char in requiredChars) {
            requiredChars[char]++; 
        }
    }

    // 'l' and 'o' are required twice, so we need to halve their counts
    requiredChars['l'] = Math.floor(requiredChars['l'] / 2);
    requiredChars['o'] = Math.floor(requiredChars['o'] / 2);

    // Find the minimum count among the required characters
    for (let char in requiredChars) {
        result = Math.min(result, requiredChars[char]);
    }

    return result;
}

const text = "balonbalonballoon";
const maxBalloons = maxNumberOfBalloons(text);
console.log("Output---->", maxBalloons);
// Output: Maximum number of balloons: 3
