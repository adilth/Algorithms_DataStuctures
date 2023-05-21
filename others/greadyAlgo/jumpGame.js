/**Description // jump game
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 * @param {number[]} nums
 * @return {boolean}
*/

function canJump(nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i] + i, max);
    if (max >= nums.length - 1) return true;
    if (max == i && nums[i] == 0) return false;
  }

  return false;
}
function canJumpI(nums) {
  let n = nums.length;
  let goal = n - 1;
  for (let i = n - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }
  return goal == 0;
}

console.log(canJumpI([2, 3, 1, 1, 4])); //true
console.log(canJump([3, 2, 1, 0, 4])); //false
