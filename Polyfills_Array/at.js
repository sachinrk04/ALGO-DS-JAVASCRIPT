// Diff-
// The at() method takes an integer value and returns the item at that index, 
// allowing for positive and negative integers. 
// Negative integers count back from the last item in the array.

Array.prototype.myAt = function (index) {
    let length = this.length;
    let realIndex = index < 0 ? length + index : index;
    return realIndex >= 0 && realIndex < length ? this[realIndex] : undefined;
}

let array = ['a', 'b', 'c', 'd', 'e'];

console.log(array.myAt(2));
console.log(array.myAt(-1));
console.log(array.myAt(5));