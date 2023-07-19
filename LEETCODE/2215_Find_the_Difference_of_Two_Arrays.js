function findDifference (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const distInNums1 = [...set1].filter((num) => !set2.has(num));
    const distInNums2 = [...set2].filter((num) => !set1.has(num));

    return [distInNums1, distInNums2];
};

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

console.log("findDifference---->", findDifference(nums1, nums2));
