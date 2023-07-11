Array.prototype.myConcat = function () {
    let newArray = this;
    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            for (let j = 0; j < arguments[i].length; j++) {
                newArray.push(arguments[i][j]);
            }
        } else {
            newArray.push(arguments[j]);
        }
    }
    return newArray;
}

let array1 = [1, 2, 3];
let array2 = [4, 5];
let array3 = [6];

let concatenated = array1.myConcat(array2, array3);
console.log(concatenated);