function combinationSum2(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);

    function backTrack(start, currCombo, remSum) {
        if (remSum === 0) {
            result.push([...currCombo]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if ( i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            if (candidates[i] <= remSum) {
                currCombo.push(candidates[i]);
                backTrack(i + 1, currCombo, remSum - candidates[i]);
                currCombo.pop();
            }
        }
    }

    backTrack(0, [], target);
    return result;
};

const candidates = [10, 1, 2, 7, 6, 1, 5];
const target = 8;

console.log(combinationSum2(candidates, target));
// Output: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]
