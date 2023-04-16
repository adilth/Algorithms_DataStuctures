/**Description //

*@description You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
RobberHouseII ) All houses at this place are arranged in a circle. 
 * @param {number[]} nums
 * @return {number}
*/

function robberHouse(nums, start = 0, end = nums?.length) {
  let house1 = 0;
  let house2 = 0;
  for (let i = start; i < end; i++) {
    let temp = Math.max(nums[i] + house2, house1);
    house2 = house1;
    house1 = temp;
  }
  return house1;
}
/**
 * Bottom-Up
 */
let robberHouseBottomUp = function (nums) {
  let memo = [];
  memo[0] = 0;
  memo[1] = nums[0];

  for (let i = 1; i < nums?.length; i++) {
    memo[i + 1] = Math.max(memo[i], memo[i - 1] + nums[i]);
  }

  return memo[nums.length];
};
function nonAdjacentSum(nums, i = 0, memo = {}) {
  if (i in memo) return memo[i];
  if (i >= nums.length) return 0;
  const includes = nums[i] + nonAdjacentSum(nums, i + 2, memo);
  const excludes = nonAdjacentSum(nums, i + 1, memo);
  memo[i] = Math.max(includes, excludes);
  return memo[i];
}

function robberHouseII(nums) {
  if (nums?.length <= 3) return Math.max(...nums);
  return Math.max(
    robberHouse(nums, 0, nums?.length - 1),
    robberHouse(nums, 1, nums?.length)
  );
}

console.log(robberHouse([1, 2, 3, 1])); //4
console.log(nonAdjacentSum([1, 2, 3, 1])); //4
console.log(robberHouseII()); //0
console.log(robberHouse([2, 1, 1, 2])); //4
console.log(robberHouseBottomUp([3, 1, 7, 2, 4, 3])); //14
console.log(nonAdjacentSum([3, 1, 7, 2, 4, 3])); //14
console.log(robberHouse([2, 7, 9, 3, 1])); //12
console.log(robberHouseII([1, 2, 3, 1])); //4
console.log(robberHouseII([1, 2, 3])); //3
