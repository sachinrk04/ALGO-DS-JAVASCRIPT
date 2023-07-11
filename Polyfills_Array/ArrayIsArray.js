// Diff- 
// The Array.isArray() method in JavaScript is used to determine whether a given value is an array.

Array.myIsArray = function (value) {
    console.log("myIsArray------>", Object.prototype.toString.call(value))
    return Object.prototype.toString.call(value) === "[object Array]";
}

console.log(Array.myIsArray([1, 3, 5]));