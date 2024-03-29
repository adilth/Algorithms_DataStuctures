/**Description // max path Sum
Write a function, maxPathSum, that takes in a grid as an argument. The function should return the maximum sum possible by traveling a path from the top-left corner to the bottom-right corner. You may only travel through the grid by moving down or right.

You can assume that all numbers are non-negative.

*@param {number[]} grid
*@returns {number} 
*/

function maxPathSum(grid, r = 0, c = 0, memo = {}) {
  let key = `${r},${c}`;
  if (key in memo) return memo[key];
  if (r === grid.length || c === grid[0].length) return -Infinity;
  if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];
  let down = maxPathSum(grid, r + 1, c, memo[key]);
  let right = maxPathSum(grid, r, c + 1, memo[key]);
  memo[key] = grid[r][c] + Math.max(down, right);

  return memo[key];
}

const grid1 = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1],
];
console.log(maxPathSum(grid1)); // -> 18
const grid2 = [
  [1, 2, 8, 1],
  [3, 10, 12, 10],
  [4, 0, 6, 3],
];
console.log(maxPathSum(grid2)); // -> 39
