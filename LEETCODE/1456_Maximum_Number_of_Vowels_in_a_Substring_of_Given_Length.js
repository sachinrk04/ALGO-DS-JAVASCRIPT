function maxVowels(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let result = 0;
    let count = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            count++;
        }
    }

    result = count;

    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i - k])) {
            count--;
        }

        if (vowels.has(s[i])) {
            count++;
        }

        result = Math.max(result, count);
    }

    return result;
};

const s = "abciiidef";
const k = 3;
const output = maxVowels(s, k)
console.log("output---->", output);
// Output: 3