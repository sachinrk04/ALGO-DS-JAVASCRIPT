function NumberOfBits(n) {
    let result = 0;

    while(n !== 0) {
        n &= (n - 1);
        result++;
    }

    return result;
}

const n = 00000000000000000000000000001011;
NumberOfBits(n);