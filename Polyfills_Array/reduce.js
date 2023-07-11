Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue || undefined;
    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback.call(accumulator, accumulator, this[i], i, this);
        } else {
            accumulator = this[i]
        }
    }
    return accumulator;
};

let array = [10, 2, 3, 4, 5];

let sum = array.myReduce((value1, value2) => {
  return value1 + value2;
}, 0);

console.log("myReduce--->",sum);