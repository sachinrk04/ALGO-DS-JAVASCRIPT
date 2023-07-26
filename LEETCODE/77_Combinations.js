function combine (n, k) {
    const result = [];

    function backTrack(start, currCombination) {
        if (currCombination.length === k) {
            result.push([...currCombination]);
            return;
        }

        for (let i = start; i <= n; i++) {
            currCombination.push(i);
            backTrack(i + 1, currCombination);
            currCombination.pop();
        }
    }

    backTrack(1, []);
    return result;
};

console.log(combine(4, 2));
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
