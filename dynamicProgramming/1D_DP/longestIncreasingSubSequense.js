/**Description // longest Increasing SubSequence

Given an integer array nums, return the length of the longest strictly increasing 
subsequence
.
 * @param {number[]} nums
 * @return {number}

*/
/*
// Solution 1, Dynamic programming
function longestIncreasingSubSeq(nums) {
  let dp = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }
  return dp;
}
*/

// solution 2 Binary search method
function binarySearch(arr, currVal) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < currVal) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

function longestIncreasingSubSeq(nums) {
  let seq = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > seq[seq.length - 1]) {
      seq.push(nums[i]);
    } else {
      let j = binarySearch(seq, nums[i]);
      seq[j] = nums[i];
    }
  }
  return seq.length;
}

console.log(longestIncreasingSubSeq([10, 9, 2, 5, 3, 7, 101, 18]));
