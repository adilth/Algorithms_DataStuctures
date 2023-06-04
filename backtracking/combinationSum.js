/**Description // combination Sum
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
//Combine
  * @param {number} n : *Distinct* input elements [1, n]
  * @param {number} k
  * @return {number[][]} : All unordered, unique combinations of size k
  * 
   // combinationSum
* @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
*/

function combine(n, k) {
  const output = [];
  const backtrack = (path = [], start = 1) => {
    if (path.length === k) return output.push(path.slice());
    for (let num = start; num <= n; num++) {
      path.push(num);
      backtrack(path, num + 1);
      path.pop();
    }
  };
  backtrack();
  return output;
}
console.log(combine(4, 2)); //[ [ 2, 2, 3 ], [ 2, 5 ], [ 7 ] ]

function combinationSumII(candidates, target) {
  var result = [];
  search([], 0, target);
  return result;

  function search(path, startIdx, target) {
    if (target === 0) return result.push(path.slice());
    if (target < 0) return;
    if (startIdx === candidates.length) return;
    path.push(candidates[startIdx]);
    search(path, startIdx, target - candidates[startIdx]);
    path.pop();
    search(path, startIdx + 1, target);
  }
}

console.log(combinationSumII([2, 3, 5, 7, 8], 8)); //[ [ 2, 2, 2, 2 ], [ 2, 3, 3 ], [ 3, 5 ], [ 8 ] ]

function combinationSum(candidates, target) {
  const result = [];
  function permute(arr = [], sum = 0, idx = 0) {
    if (sum > target) return;
    if (sum === target) result.push(arr);

    for (let i = idx; i < candidates.length; i++) {
      permute([...arr, candidates[i]], sum + candidates[i], i);
    }
  }
  permute();
  return result;
}

console.log(combinationSum([2, 3, 5], 8)); //[ [ 2, 2, 2, 2 ], [ 2, 3, 3 ], [ 3, 5 ] ]
