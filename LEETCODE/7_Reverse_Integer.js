function reverseInteger(x) {
    let xString = x.toString().split("");

    let left = 0;
    let right = xString.length - 1;
    let result;

    while (left < right) {
        [xString[left], xString[right]] = [xString[right], xString[left]];
        left++;
        right--;
    }

    result = parseInt(xString.join(""), 10)

    return result > 0x7FFFFFFF ? 0 : x < 0 ? -result : result;
};

const num = 123;
const output = reverseInteger(num);
console.log("output--->", output);