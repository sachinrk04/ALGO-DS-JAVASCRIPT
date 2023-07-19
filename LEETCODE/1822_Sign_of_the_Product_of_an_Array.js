function arraySign (nums) {
    let negatives = 0;

    for (const num of nums) {
        if (num === 0) {
            return 0;
        } else if (num < 0) {
            negatives++;
        }
    }

    return negatives % 2 === 0 ? 1 : -1;
}

const nums1 = [-1, 2, 3, -5];
const nums2 = [0, -1, 2, -3];

console.log(arraySign(nums1));
console.log(arraySign(nums2));