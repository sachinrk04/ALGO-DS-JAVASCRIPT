function summaryRanges(nums) {
    if (!nums.length) return [];

    const result = [];
    let start = nums[0];
    let end = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === 1) {
            end = nums[i];
        } else {
            result.push(getRange(start, end));
            start = nums[i];
            end = nums[i];
        }
    }
    result.push(getRange(start, end));

    return result;
}

function getRange(start, end) {
    return start === end ? start.toString() : start + '->' + end;
}

const nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums)); 
// Output: ["0->2", "4->5", "7"]