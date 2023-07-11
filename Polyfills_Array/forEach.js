// Diff- The forEach() method executes a provided function once for each array element.

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    };
}

let arr = ['a', 'b', 'c'];
let result = [];
arr.myForEach(ele => {
    result.push(ele.toUpperCase())
})
console.log("result--->", result)