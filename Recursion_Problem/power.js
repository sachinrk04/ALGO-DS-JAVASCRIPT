// M-1
function power(num, pow) {
    if (pow === 0) return 1;
    if (pow === 1) return num;
    let ans = power(num, Math.floor(pow / 2));
    return ans * ans * power(num, pow % 2);
}

// M-2
function power(x, n) {
    if (n === 0) {
      return 1;
    } else if (n < 0) {
      return 1 / power(x, -n);
    } else if (n % 2 === 0) {
      const y = power(x, n / 2);
      return y * y;
    } else {
      return x * power(x, n - 1);
    }
}

power(2, 4);