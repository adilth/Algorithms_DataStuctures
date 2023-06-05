/*Description //array stepper
Write a function, arrayStepper, that takes in an array of numbers as an argument. You start at the first position of the array. The function should return a boolean indicating whether or not it is possible to reach the last position of the array. When situated at some position of the array, you may take a maximum number of steps based on the number at that position.

*/

function arraySteppe(nums) {
  let memo = {};
  const dfs = (i, j) => {
    if (i in memo) return memo[i];
    if (i >= nums.length - 1) return true;
    const step = nums[i];
    //  if (j <= nums[i]) return false;ddd
    if (dfs(i + j, j + 1) === true) {
      memo[i] = true;
      return true;
    }
    memo[i] = false;
    return false;
  };
  dfs(0, 1);
  return memo;
}
const arrayStepper = (numbers, i = 0, memo = {}) => {
  if (i in memo) return memo[i];

  if (i >= numbers.length - 1) return true;

  const maxStep = numbers[i];
  for (let step = 1; step <= maxStep; step += 1) {
    if (arrayStepper(numbers, i + step, memo) === true) {
      memo[i] = true;
      return true;
    }
  }

  memo[i] = false;
  return false;
};
console.log(arrayStepper([2, 4, 2, 0, 0, 1])); // -> true
console.log(arrayStepper([2, 3, 2, 0, 0, 1])); // -> false
console.log(arrayStepper([3, 1, 3, 1, 0, 1])); // -> true
