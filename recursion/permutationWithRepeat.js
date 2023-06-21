/** Description // permutation with repeat
 *
 * @param {[number | string]} perms
 * @param {number} permutationLength
 * @return {*[]}
 */
function permsWithRepeat(perms, permsLen = perms?.length) {
  if (!permsLen || !perms) {
    return [[]];
  }

  const permutations = [];

  // Get smaller permutations.
  const smallerPermutations = permsWithRepeat(perms, permsLen - 1);

  //   Go through all options and join it to the smaller permutations.
  perms.forEach((currentOption) => {
    smallerPermutations.forEach((smallerPermutation) => {
      permutations.push([currentOption].concat(smallerPermutation));
    });
  });
  return permutations;
}

console.log(permsWithRepeat(["A", "B"])); //[ [ 'A', 'A' ], [ 'A', 'B' ], [ 'B', 'A' ], [ 'B', 'B' ] ]
console.log(permsWithRepeat()); //[ [] ]
