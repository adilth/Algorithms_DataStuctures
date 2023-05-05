/**Description //permutation
Given an array of nums or string, return all the possible permutations. You can return the answer in any order.

 * @param {number[]} arr
 * @return {number[][]}
*/

function permutation(arr) {
  if (arr.length == 0) return [[]];
  let first = arr[0];

  let rest = arr.slice(1);
  let permsWithoutFirst = permutation(rest);
  let allPermutation = [];
  permsWithoutFirst.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      let premWithFirst = [...perm.slice(0, i), first, ...perm.slice(i)];
      allPermutation.push(premWithFirst);
    }
  });
  return allPermutation;
}

function allPermutations(arr) {
  let results = [];
  function permute(arr, memo = []) {
    let cur;

    for (let i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  permute(arr);
  return results;
}

console.log(permutation(["a", "b", "c", "d"]));
// console.log(allPermutations(["a", "b", "c"]));
/*output
[
  [ 'a', 'b', 'c', 'd' ], [ 'b', 'a', 'c', 'd' ],
  [ 'b', 'c', 'a', 'd' ], [ 'b', 'c', 'd', 'a' ],
  [ 'a', 'c', 'b', 'd' ], [ 'c', 'a', 'b', 'd' ],
  [ 'c', 'b', 'a', 'd' ], [ 'c', 'b', 'd', 'a' ],
  [ 'a', 'c', 'd', 'b' ], [ 'c', 'a', 'd', 'b' ],
  [ 'c', 'd', 'a', 'b' ], [ 'c', 'd', 'b', 'a' ],
  [ 'a', 'b', 'd', 'c' ], [ 'b', 'a', 'd', 'c' ],
  [ 'b', 'd', 'a', 'c' ], [ 'b', 'd', 'c', 'a' ],
  [ 'a', 'd', 'b', 'c' ], [ 'd', 'a', 'b', 'c' ],
  [ 'd', 'b', 'a', 'c' ], [ 'd', 'b', 'c', 'a' ],
  [ 'a', 'd', 'c', 'b' ], [ 'd', 'a', 'c', 'b' ],
  [ 'd', 'c', 'a', 'b' ], [ 'd', 'c', 'b', 'a' ]
]
*/
console.log(permutation([1, 2, 3]));
/*[
  [ 1, 2, 3 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 1, 3, 2 ],
  [ 3, 1, 2 ],
  [ 3, 2, 1 ]
]
*/
