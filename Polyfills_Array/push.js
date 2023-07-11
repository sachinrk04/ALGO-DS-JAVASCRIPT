// Diff- 
// The push() method adds the specified elements to the end 
// of an array and returns the new length of the array.

Array.prototype.myPush = function () {
    this[this.length] = arguments[0];
    return this.length;
}

let array = [1, 2, 3];

let result = array.myPush(4);
console.log(result);
console.log(result.length);