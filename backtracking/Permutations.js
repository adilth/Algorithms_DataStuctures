/**Description //Permutations
 * 
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 * @param {number[]} nums
 * @return {number[][]}
*/
function permutations(nums) {
  let output = [];
  let seen = new Set();
  const backtrack = (path) => {
    if (path.length === nums.length) return output.push([...path]);

    for (let i = 0; i < nums.length; i++) {
      if (seen.has(nums[i])) continue;

      path.push(nums[i]);
      seen.add(nums[i]);

      backtrack(path);

      path.pop();
      seen.delete(nums[i]);
    }
  };
  backtrack([]);
  return output;
}

console.log(permutations([1, 2, 3]));
/*
[
  [ 1, 2, 3 ],
  [ 1, 3, 2 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 3, 1, 2 ],
  [ 3, 2, 1 ]
]
*/
