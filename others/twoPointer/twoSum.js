/**Description //Two Sum with Two Pointer
find two numbers in array and return them if sum together equals the target if target sum not found return null 

@param {number[]} arr
@param {number} target
@returns {number}
*/

function twoSum(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let result = null;
  while (start !== end) {
    let diff = arr[start] + arr[end];
    if (target === diff) {
      result = [arr[start], arr[end]];
      break;
    } else if (target > diff) {
      start++;
    } else if (target < diff) {
      end--;
    }
  }
  return result || null;
}

console.log(twoSum([2, 3, 5, 6, 8, 11], 11)); //[ 3, 8 ]
console.log(twoSum([0, 1, 2, 4, 6, 7], 20)); //null
console.log(twoSum([2, 5, 6, 7, 8, 15, 17], 14)); //[ 6, 8 ]
