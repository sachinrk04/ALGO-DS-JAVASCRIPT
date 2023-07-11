// Diff-
// The at() method takes an integer value and returns a new String consisting of 
// the single UTF-16 code unit located at the specified offset. This method allows 
// for positive and negative integers. Negative integers count back from the last string character.

String.prototype.myAt = function (index) {
    if (index >= 0 && index < this.length) {
        return this.charAt(index);
    } else {
        return "";
    };
};

const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 5;
console.log(`Using an index of ${index} the character returned is ${sentence.myAt(index)}`);