function countBits(n) {
    let result = [0];
    for (let i = 1; i < (n+1); i++) {
        let mid = (i >> 1);
        let bit = (i & 1);

        const bits = (result[mid] + bit);
        result.push(bits);
    }
    return result;
}

countBits(2);