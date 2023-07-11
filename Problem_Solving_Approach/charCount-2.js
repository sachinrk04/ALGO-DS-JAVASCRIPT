// M---
function charCount(str) {
    var obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
        return false;
    }
    return true;
}

// M--

// function charCount(str) {
//     var obj = {};
//     for (let char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }


// M--

// Advance method

// function charCount(str) {
//     let chr = {};
//     let num = {};
//     let speChar = {};

//     for (let i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         if (/[a-z]/.test(char)) {
//             chr = commonCheck(chr, char)
//         } else if (/[0-9]/.test(char)) {
//             num = commonCheck(num, char)
//         } else {
//             speChar = commonCheck(speChar, char)
//         }
//     }

//     return {chr, num, speChar};
// }

// function commonCheck(obj, cns) {
//     if (obj[cns] > 0) {
//         obj[cns]++;
//     } else {
//        obj[cns] = 1;
//     }
//     return obj
// }