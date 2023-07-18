function divisibilityArray(word, m) {
    const n = word.length;
    const result = [];

    let num = 0;
    for (let i = 0; i < n; i++) {
        num = (num * 10 + Number(word[i])) % m;
        result.push(num === 0);
    }

    return result;
};

const string = "123456";
const divisor = 7;

console.log(divisibilityArray(string, divisor));