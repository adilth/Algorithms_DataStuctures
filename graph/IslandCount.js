/** Description // island count
island count
Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.
@param {string[][]} grid 
@returns {number}
 */

export default function islandCount(grid) {
  if (!Array.isArray(grid)) {
    throw new Error("Grid must be an array");
  }
  const visited = new Set();
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (explore(grid, row, col, visited) === true) {
        count++;
      }
    }
  }
  return count;
}
export const explore = (grid, row, col, visited) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;

  if (grid[row][col] == "W") return false;
  let pos = row + "," + col;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, row - 1, col, visited);
  explore(grid, row + 1, col, visited);
  explore(grid, row, col - 1, visited);
  explore(grid, row, col + 1, visited);
  return true;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];
