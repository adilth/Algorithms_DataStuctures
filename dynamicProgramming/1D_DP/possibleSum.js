/** Description //possible sum

Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

You may assume that the target amount is non-negative.

* @param {number} amount
 *@param {number[]} nums
 *@return {number}
*/

function sumPossible(amount, nums, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount < 0) return false;
  if (amount == 0) return true;
  for (let num of nums) {
    if (sumPossible(amount - num, nums, memo) === true) {
      memo[amount] = true;
      return true;
    }
  }
  memo[amount] = false;
  return false;
}

console.log(sumPossible(8, [5, 12, 4])); //true
console.log(sumPossible(15, [6, 2, 10, 19])); //false
console.log(sumPossible(103, [6, 20, 1])); //true
