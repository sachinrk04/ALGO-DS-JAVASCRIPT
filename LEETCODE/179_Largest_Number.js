function largestNumber(nums) {
    const sortedNums = nums.map(String).sort((a, b) => {
        const order1 = a + b;
        const order2 = b + a;
        return order2.localeCompare(order1);
    });

    if (sortedNums[0] === '0') {
        return '0'; // Handle the case when the largest number is 0
    }

    return sortedNums.join('');
};

const nums = [10, 2, 5, 9];

console.log(largestNumber(nums)); // Output: "95210"