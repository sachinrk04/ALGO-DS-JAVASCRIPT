// Diff-
// The match() method retrieves the result of matching a string against a regular expression.

String.prototype.myMatch = function (regex) {
    if (!(regex instanceof RegExp)) {
        regex = new RegExp(regex);
    }

    return this.match(regex);
};

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.myMatch(regex);

console.log(found);
