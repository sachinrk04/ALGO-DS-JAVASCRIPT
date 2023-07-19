function combinationSum3 (k, n) {
    const result = [];

    function backTrack(start, currCombination, targetSum) {
        if (currCombination.length === k) {
            if (targetSum === 0) {
                result.push([...currCombination]);
            }
            return;
        }

        for (let i = start; i <= 9; i++) {
            if (targetSum - i < 0) break;
            currCombination.push(i);
            backTrack(i + 1, currCombination, targetSum - i);
            currCombination.pop();
        }
    };

    backTrack(1, [], n);
    return result;
}

console.log(combinationSum3(3, 7)); // Output: [[1,2,4]]
console.log(combinationSum3(3, 9)); // Output: [[1,2,6],[1,3,5],[2,3,4]]