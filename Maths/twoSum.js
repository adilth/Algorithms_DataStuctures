/** Description// two sum
 * Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a array / list (depending on your language) like so: (index1, index2).
For the purposes of this problem, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
 * @param {Number[]} array 
 * @param {Number} target 
 * @returns Number[]
 */

export default function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const diffIndex = array.indexOf(target - array[i]);
    if (diffIndex >= 0 && diffIndex !== i) {
      return [i, diffIndex];
    }
  }
  return [];
}

const array = [2, -5, 3, 0, -7];
const target = -5;
console.log(twoSum(array, target));
