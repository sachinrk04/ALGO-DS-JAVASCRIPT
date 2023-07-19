function combinationSum(candidates, target) {
    const result = [];
  
    function backtrack(start, currCombination, remainingSum) {
      if (remainingSum === 0) {
        result.push([...currCombination]);
        return;
      }
  
      for (let i = start; i < candidates.length; i++) {
        if (candidates[i] <= remainingSum) {
          currCombination.push(candidates[i]);
          backtrack(i, currCombination, remainingSum - candidates[i]);
          currCombination.pop();
        }
      }
    }
  
    backtrack(0, [], target);
    return result;
}
  
const candidates = [2, 3, 6, 7];
const target = 7;

console.log(combinationSum(candidates, target)); 
// Output: [[2,2,3],[7]]