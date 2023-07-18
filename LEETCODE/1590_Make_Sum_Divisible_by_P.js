function minSubarray(nums, p) {
    const targetRemainder = nums.reduce((acc, num) => (acc + num) % p, 0);
    if (targetRemainder === 0) return 0;

    const map = new Map();
    let currRemainder = 0;
    let minLen = Infinity;
    let currLen = 0;
    map.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        currRemainder = (currRemainder + nums[i]) % p;
        const target = (currRemainder - targetRemainder + p) % p;

        if (map.has(target)) {
            currLen = i - map.get(target);
            minLen = Math.min(minLen, currLen);
        }

        map.set(currRemainder, i);
    }

    return minLen === Infinity || minLen === nums.length ? -1 : minLen;
}

const nums = [3, 1, 4, 2];
const p = 6;

console.log(minSubarray(nums, p));
