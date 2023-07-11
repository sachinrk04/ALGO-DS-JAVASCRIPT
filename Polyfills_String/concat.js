// Diff-
// The concat() method concatenates the string arguments to the calling string and returns a new string.

String.prototype.myConcat = function(...args) {
    let result = this;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

const str1 = 'Hello';
const str2 = 'World';
const str3 = 'World';
console.log(str1.myConcat(' ', str2, ' ', str3));