// Diff-
// The includes() method performs a case-sensitive search to determine whether 
// one string may be found within another string, returning true or false as appropriate.
String.prototype.myIncludes = function(searchString, position) {
    if (typeof position !== 'number') {
        position = 0
    }

    if (position + searchString.length > this.length) {
        return false;
    }

    return this.indexOf(searchString, position) !== -1;
};

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'IS' : 'IS NOT'} in the sentence`);