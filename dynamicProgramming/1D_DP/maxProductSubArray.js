/**Description 
* @description

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

console.log(maxProduct([1, 2, 3, -2, -2]));
