/**Description //Find the Duplicate Number
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
output: 3
@param {Number[]} arr
@returns {number}
*/

function findDuplicate(arr) {
  let slow = 0;
  let fast = 0;
  while (true) {
    fast = arr[arr[fast]];
    slow = arr[slow];
    if (fast === slow) {
      let pointer = 0;
      while (pointer !== slow) {
        slow = arr[slow];
        pointer = arr[pointer];
      }
      return slow;
    }
  }
}

console.log(findDuplicate([1, 2, 4, 3, 2])); //2
console.log(findDuplicate([7, 4, 8, 1, 9, 4, 6])); //4
