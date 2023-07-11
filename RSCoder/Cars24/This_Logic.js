const calc = {
    total : 0,
    add(a) {
        this.total += a;
        return this;
    },
    subtract(s) {
        this.total -= s;
        return this;
    },
    multiply(m) {
        this.total *= m;
        return this;
    },
    divide(d) {
        this.total /= d;
        return this;
    }
}

const result = calc.add(10).multiply(5).subtract(30).add(10).divide(3);
console.log(result.total);