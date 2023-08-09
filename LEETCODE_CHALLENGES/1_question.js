// Question-------

// You are given a license key represented as a string s that consists of only alphanumeric characters 
// and dashes.The string is separated into n + 1 groups by n dashes.You are also given an integer k.

// We want to reformat the string s such that each group contains exactly k characters, except for the 
// first group, which could be shorter than k but still must contain at least one character.Furthermore,
// there must be a dash inserted between two groups, and you should convert all lowercase letters to
// uppercase.

// Approach-----
// you can follow these steps:

// 1. Remove all dashes from the original string and convert all lowercase letters to uppercase.
// 2. Calculate the length of the first group after removing dashes.
// 3. Initialize an empty result string to build the reformatted license key.
// 4. Iterate over the modified string and add characters to the result string while inserting dashes 
//    after each group of k characters(except for the first group).
// 5. Return the final reformatted license key.

function licenseKeyFormatting(s, k) {
    const modifiedString = s.replace(/-/g, "").toUpperCase();
    const firstGroupLength = modifiedString.length % k;

    let result = modifiedString.slice(0, firstGroupLength);
    let i = firstGroupLength;

    while (i < modifiedString.length) {
        if (result !== "") result += "_";
        result += modifiedString.slice(i, i + k);
        i += k;
    }

    return result;
};

const s = "2-5g-3-J";
const k = 2;
const output = licenseKeyFormatting(s, k);
console.log("output--->", output);
// Output: "25-G3-J"

