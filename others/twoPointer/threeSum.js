/**Description //Three sum //two Pointer
Given an array of unsorted numbers find all unique triples in it that add up to zero.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
@param {number[]} arr
@returns {number[][]}
*/

function threeSum(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < sorted.length; i++) {
    let start = i + 1;
    let end = sorted.length - 1;
    while (start < end) {
      let sum = sorted[i] + sorted[start] + sorted[end];
      if (sum == 0) {
        result.push([sorted[i], sorted[start], sorted[end]]);
        while (start < end && sorted[start] === sorted[start + 1]) start++;
        start++;
        while (start < end && sorted[end] === sorted[end - 1]) end--;
        end--;
      } else if (sum < 0) {
        start++;
      } else {
        end--;
      }
    }
  }
  return result || null;
}

console.log(threeSum([-2, 5, -3, 9, -5, 0, 6, 5, 7])); //[ [ -5, -2, 7 ], [ -5, 0, 5 ], [ -3, -2, 5 ] ]
console.log(threeSum([-3, 0, 1, 2, -1, 1, -2])); //[ [ -3, 1, 2 ], [ -2, 0, 2 ], [ -2, 1, 1 ], [ -1, 0, 1 ] ]
