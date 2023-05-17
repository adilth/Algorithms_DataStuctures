/**Description // Partition Equal Subset Sum

* @description Given an array of integers, can you partition the array into two subsets such that the sum of the elements in both subsets is equal?

 * @param {number[]} nums
 * @return {boolean}

*/

function canPartition(nums) {
  let sum = nums.reduce((ac, cu) => ac + cu, 0);
  let half = sum / 2;
  if (sum % 2 !== 0 || Math.max(...nums) > half) return false;
  let dp = new Set();
  dp.add(0);
  for (let i = nums.length - 1; i > 0; i--) {
    let nextDp = new Set();
    for (let n of dp.values()) {
      let newValue = nums[i] + n;
      if (half === newValue) return true;
      nextDp.add(newValue);
    }
    dp = new Set([...dp, ...nextDp]);
  }
  return false;
}

console.log(canPartition([1, 5, 11, 5])); //true
console.log(canPartition([3, 7, 8, 6, 2])); //true
console.log(canPartition([3, 8, 1, 4, 6, 5])); //false
