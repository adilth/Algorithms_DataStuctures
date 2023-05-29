/**Description: //Shortest Unsorted Continuous Subarray

Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.
@param {number[]} arr
@returns {number}
*/

function continuousSubarray(arr) {
  let max = -Infinity;
  let min = Infinity;
  let start = 0;
  let end = arr.length - 1;
  let leftEnd = 0;
  let rightEnd = -1;
  while (end >= 0) {
    arr[start] >= max ? (max = arr[start]) : (rightEnd = start);
    arr[end] <= min ? (min = arr[end]) : (leftEnd = end);
    start++;
    end--;
  }
  return rightEnd - leftEnd + 1;
}

function continuousSubarrayII(nums) {
  let n = nums.length;
  let start = 0;
  let end = n - 1;

  // find first index violating ascending order
  while (start < n - 1 && nums[start] <= nums[start + 1]) start += 1;

  // edge case: already sorted
  if (start == n - 1) return 0;
  // find first index violating descending order in reverse
  while (end > 0 && nums[end] >= nums[end - 1]) end -= 1;

  // find min and max of our temporary window
  let windowMax = Math.max(nums[(start, end + 1)]);
  let windowMin = Math.min(nums[(start, end + 1)]);

  // extend the window
  while (start > 0 && nums[start - 1] > windowMin) start--;

  while (end < n - 1 && nums[end + 1] < windowMax) end++;

  return end - start + 1;
}
console.log(continuousSubarray([2, 6, 4, 8, 10, 9, 15])); //5
console.log(continuousSubarray([1, 2, 3, 4])); //0
console.log(continuousSubarray([1, 2, 3, 4, 3, 5, 4])); //4
