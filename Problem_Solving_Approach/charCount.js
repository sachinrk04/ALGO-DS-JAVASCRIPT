function charCount(str) {
    var result = {};

    for (let i = 0; i < str.length; i++) {
        var char = str[i];

        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }

    return result;
}