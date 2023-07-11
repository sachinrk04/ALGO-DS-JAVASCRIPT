Array.prototype.myIncludes = function(element) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === element ) {
            return true;       
        }
    }
    return false;
}

const arr  = [1, 2, 3];
let result = arr.myIncludes(1);
console.log("myIncludes--->", result)

const pets = ['cat', 'dog', 'bat'];
let result1 = pets.myIncludes("dog");
console.log("myIncludes--->", result1)
