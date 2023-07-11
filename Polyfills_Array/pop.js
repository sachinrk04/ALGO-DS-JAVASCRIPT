// Diff-
// The pop() method in JavaScript is used to remove the last element from an array and return that element.
Array.prototype.myPop = function () {
    if (this.length === 0) {
        return undefined;
    }

    let lastIndex = this.length - 1;
    let lastElement = this[lastIndex];
    this.length = lastIndex;
    delete this[lastIndex];
    return lastElement;
}

let array = [1, 2, 3, 4, 5];
let lastElement = array.myPop();
console.log("myPop---->",lastElement);
console.log("array---->", array);