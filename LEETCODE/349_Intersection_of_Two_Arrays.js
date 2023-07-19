function intersection(nums1, nums2) {
    const set = new Set(nums1);
    const result = [];

    for (let num of nums2) {
        if (set.has(num)) {
            result.push(num);
            set.delete(num);
        };
    };

    return result;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2, 3];

console.log(intersection(nums1, nums2));