Array.prototype.myFilter = function (callback) {
    let filterArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filterArray.push(this[i]);
        }
    }
    return filterArray;
}

const numbers = [1, 2, 3, 4]
const even = numbers.myFilter(item => item % 2 === 0)
console.log("myFilter---->",even);