/**Description //permutation
Given an array of nums or string, return all the possible permutations. You can return the answer in any order.

 * @param {number[]} arr
 * @return {number | string [][]}
*/

export function permutation(arr) {
  if (arr.length == 0) return [];
  let seen = new Set();
  const perms = (a) => {
    if (a.length == 0) return [[]];
    if (seen.has(a.join(","))) return;
    let first = a[0];

    let rest = a.slice(1);
    let permsWithoutFirst = perms(rest);
    /**@type {number[][]} allPermutation*/
    let allPermutation = [];
    permsWithoutFirst.forEach((perm) => {
      for (let i = 0; i <= perm.length; i++) {
        let premWithFirst = [...perm.slice(0, i), first, ...perm.slice(i)];
        seen.add(premWithFirst.join(","));
        allPermutation.push(premWithFirst);
      }
    });
    console.log(seen);
    return allPermutation;
  };
  return perms(arr);
}

export function allPermutations(arr) {
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

console.log(permutation([1, 1, 2]));
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
