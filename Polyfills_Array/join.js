// Diff-
// The join() method creates and returns a new string by concatenating all of the 
// elements in an array (or an array-like object), separated by commas or a specified 
// separator string. If the array has only one item, then that item will be 
// eturned without using the separator.

Array.prototype.myJoin = function(separator) {
    let result = "";
    for (let i = 0; i < this.length; i++) {
        if (i > 0) {
            result += separator === undefined ? "," : separator;
        }
        if (this[i] !== undefined) {
            result += this[i];
        }
    }
    return result;
}

let array = [1, 2, 3, 4, 5];

console.log(array.myJoin());
