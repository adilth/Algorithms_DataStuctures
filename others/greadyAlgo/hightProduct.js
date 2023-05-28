/**Description // hight product
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
@param {number[]} arr
@returns {number}
*/

function hightProduct(arr) {
  arr = arr.sort((a, b) => a - b);
  let max = arr[arr.length - 3] * arr[arr.length - 2] * arr[arr.length - 1];
  let min = arr[0] * arr[1] * arr[arr.length - 1];
  return Math.max(min, max);
}

console.log(hightProduct([-1, -2, -3])); //-6
console.log(hightProduct([-4, -6, 2, 5, 4])); //120
