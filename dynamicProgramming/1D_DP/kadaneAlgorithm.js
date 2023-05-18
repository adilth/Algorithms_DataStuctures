/**Description // maximum Sum Subarray

Given an integer array nums, find the subarray with the largest sum, and return its sum.
Example 

Input: nums = [5,4,-1,7,8]
Output: 23
@param {number[]} arr
@require {number} 
*/

function maxSumSubarray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    /// nums[i] represents the largest sum of all subarrays ending with index i...
    // then its value should be the larger one between nums[i]...
    // nums[i-1] + nums[i] (largest sum plus current number with using prefix)...
    // calculate nums[0], nums[1]…, nums[n] while comparing each one with current largest sum...
    arr[i] = Math.max(0, arr[i - 1] + arr[i]);

    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maxSumSubarray([5, 4, -1, 7, 8])); //23
