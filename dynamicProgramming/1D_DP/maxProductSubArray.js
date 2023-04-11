/**Description 
* @description Given an integer array nums, find a subarray
 that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.
 * @param {number[]} nums
 * @return {number}

*/

function maxProduct(nums) {
  let res = Math.max(...nums);
  let curMin = 1;
  let curMax = 1;
  for (let n of nums) {
    curMax = Math.max(curMax * n, curMin * n, n);
    curMin = Math.min(curMax * n, curMin * n, n);
    res = Math.max(res, curMax);
  }
  return res;
}

console.log(maxProduct([1, 2, 3, -2, -2])); //12
console.log(maxProduct([2, 3, -2, 4])); //6
console.log(maxProduct([3, 1, 2, -1, 1, -3])); //6
