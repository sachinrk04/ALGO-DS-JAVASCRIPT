Array.prototype.myKeys = function () {
    var currentIndex = 0;
    var array = this;

    return {
        next: function() {
            return currentIndex < array.length
            ? { value: currentIndex++, done: false }
            : { value: undefined, done: true };
        }
    };
};

const array1 = ['a', 'b', 'c'];
const iterator = array1.myKeys();
console.log("iterator--->", iterator.next())

// const array1 = ['a', 'b', 'c'];
// const iterator = array1.keys();
// console.log("iterator--->", iterator)