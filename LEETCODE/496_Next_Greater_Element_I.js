function nextGreaterElement(nums1, nums2) {
    const result = [];
    const stack = [];
    const nextMap = new Map();

    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            nextMap.set(stack.pop(), num);
        }
        stack.push(num);
    }

    for (let num of nums1) {
        result.push(nextMap.get(num) || -1);
    }

    return result;
}

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];

nextGreaterElement(nums1, nums2);