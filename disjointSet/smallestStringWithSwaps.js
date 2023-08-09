/**Description // smallest String With Swaps
You are given a string s, and an array of pairs of indices in the string pairs where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string.

You can swap the characters at any pair of indices in the given pairs any number of times.

Return the lexicographically smallest string that s can be changed to after using the swaps.

*/

import { DisjointSetLength } from "./disjointSet.js";
/**
 * @param {Number} a
 * @param {Number} b
 * @returns { 1 | -1 | 0}
 *
 */
function sortingFunc(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}
/**
 * @param {string} str
 * @param {number[][]} pairs
 * @return {string}
 */
export default function smallestStringWithSwaps(str, pairs) {
  let result = [];
  const unionFind = new DisjointSetLength(str.length);
  pairs.forEach(([idx1, idx2]) => {
    unionFind.union(idx1, idx2);
  });

  let indexSwapSet = new Array(str.length);
  for (let i = 0; i < str.length; i++) {
    if (i !== unionFind.parent[i]) unionFind.find(i);
    let index = unionFind.parent[i];
    if (indexSwapSet[index] === undefined) {
      indexSwapSet[index] = [];
    }
    indexSwapSet[index].push(i);
  }
  console.log(indexSwapSet);

  indexSwapSet.forEach((key) => {
    // Go through each set of swappable indices.
    if (key !== undefined) {
      // a. Create a char array with with a character in s corresponding to each index in the current set of indices we are in.
      let charSwapSet = [];
      for (let index of key) {
        charSwapSet.push(str[index]);
      }
      // b. Now sort the array.
      charSwapSet.sort(sortingFunc);
      for (let j = 0; j < charSwapSet.length; j++) {
        // c. Do the swap in our new char array.
        result[key[j]] = charSwapSet[j];
      }
    }
  });
  return result.join("");
}

// Test the function
console.log(
  smallestStringWithSwaps("dcabfe", [
    [0, 3],
    [1, 2],
    [1, 3],
  ])
);

const pairs = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
];
const input = "abcdefgh";

console.log(smallestStringWithSwaps(input, pairs));
