function numberCompare(num1, num2) {
    return num1 - num2; // increasing order
    // return num2 - num1; // decreasing order
}

function stringCompare(str1, str2) {
    return str1.length - str2.length; // increasing order
    // return str2.length - str1.length; // decreasing order
}

let arr = [6, 4, 15, 10];
let sortArr = arr.sort(numberCompare);
console.log("sortArr--->", sortArr)