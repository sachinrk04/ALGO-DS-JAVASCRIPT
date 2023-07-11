Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}

const arr = [5, 12, 8, 130, 44];
const result = arr.myFind(ele => ele = 10);
console.log("myFind---->", result)