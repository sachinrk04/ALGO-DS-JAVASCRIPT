Array.prototype.myFindIndex = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return i
        }
    }
    return -1;
}

let arr = [5, 12, 8, 130, 44];
const result = arr.myFindIndex(ele => ele > 13);
console.log("myFindIndex--->", result);