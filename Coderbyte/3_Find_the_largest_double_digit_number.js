// Question-------
// Have the function MathChallenge(num) take the num parameter being passed and determine 
// the largest double digit number within the whole number.For example: if num is 4759472 
// then your program should return 94 because that is the largest double digit number.
// The input will always contain at least two positive digits.

// Approch-----
// To find the largest double - digit number within the whole number provided as num, you can 
// follow these steps:

// 1. Convert the number num to a string so that you can easily iterate over its digits.
// 2. Loop through the digits of the number and keep track of the largest double-digit 
//    number found so far.

function DoubleDigitNumber(num) {
    if (num < 10) return num * 10;

    // Convert the number to a string to iterate through its digits
    const numStr = num.toString();

    let largestDoubleDigit = 0;

    for (let i = 0; i < numStr.length - 1; i++) {
        const doubleDigit = parseInt(numStr.substr(i, 2));
        if (doubleDigit >= 10 && doubleDigit <= 99) {
            largestDoubleDigit = Math.max(largestDoubleDigit, doubleDigit);
        }
    }

    return largestDoubleDigit;
}

console.log(DoubleDigitNumber(4759472));
// Output: 94
