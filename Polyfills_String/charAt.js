// Diff-
// The charAt() method of String values returns a new string consisting of the single 
// UTF-16 code unit located at the specified offset into the string.

String.prototype.myCharAt = function(index) {
    if (index >= 0 && index < this.length) {
        return this[index];
    } else {
        return "";
    };
};

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.myCharAt(index)}`);
