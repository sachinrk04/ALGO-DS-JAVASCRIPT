// Diff- 

// The map() method creates a new array populated with the results of calling a 
// provided function on every element in the calling array.

Array.prototype.myMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (this.indexOf(this[i]) > -1) {
            result.push(callback(this[i], i, this));
        }
    }
    return result;
}

const arr = [1, 4, 9, 16];

const mapValue = arr.myMap(x => x * 2);

console.log("myMap--->", mapValue);