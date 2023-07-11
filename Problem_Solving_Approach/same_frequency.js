// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = (num1, num2) => {
    strNum1 = num1.toString();
    strNum2 = num2.toString();

    if (strNum1.length !== strNum2.length) return false;

    const freqCount1 = {};

    for (let val of strNum1) freqCount1[val] = (freqCount1[val] || 0) + 1;
    for (let val of strNum2) {
        if (!freqCount1[val]) return false;
        freqCount1[val]--;
    }

    return true;
};