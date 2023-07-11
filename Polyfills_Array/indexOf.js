// Diff-
// The indexOf() method returns the first index at which a given 
// element can be found in the array, or -1 if it is not present.

Array.prototype.myIndexOf = function (searchElement, fromIndex) {
    let startIndex = fromIndex || 0;

    for (let i = startIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
            return i;
        }
    }

    return -1;
}

let array = [1, 2, 3, 4, 5];

// console.log(array.myIndexOf(4));

const array1 = ['a', 'b', 'c'];
const iterator = [...array1.keys()];
console.log("iterator-->", iterator)
