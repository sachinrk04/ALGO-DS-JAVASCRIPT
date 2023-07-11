// Write a recursive function called capitalizeFirst. Given an array of strings, 
// capitalize the first letter of each string in the array.

// capitalize First
function capitalizeFirst(arr) {
    if (arr.length === 1) {
        return [arr[0][0].toUpperCase() + arr[0].slice(1)];
    }
    let res = capitalizeFirst(arr.slice(0, -1));
    res.push(arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].slice(1));
    return res;
}

capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana']


function capitalizeFirst_M2(array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst_M2(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizeFirst_M2(words); // ['I', 'Am', 'Learning', 'Recursion']