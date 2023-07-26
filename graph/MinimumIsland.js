/**Description //minimum island

Write a function, countTheMinIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.
* @param {String[][]} grid
* @returns {Number}
*/
export default function countTheMinIsland(grid) {
  if (!Array.isArray(grid) || !grid.length) return 0;
  let visited = new Set();
  let minCount = Infinity;
  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[0].length; col++) {
      let size = exploreGrid(grid, row, col, visited);
      if (size > 0 && size < minCount) {
        minCount = size;
      }
    }
  }
  return minCount === Infinity ? 0 : minCount;
}

/**
 *
 * @param {String[][]} grid
 * @param {String} row
 * @param {String} col
 * @param {Set<String>} visited
 * @returns {number}
 */
export const exploreGrid = (grid, row, col, visited) => {
  let count = 1;
  let rowInbounds = row >= 0 && row < grid.length;
  let colInbounds = col >= 0 && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;

  if (grid[row][col] === "W") return 0;
  let pos = `${row},${col}`;
  if (visited.has(pos)) return 0;
  visited.add(pos);
  count += exploreGrid(grid, row - 1, col, visited);
  count += exploreGrid(grid, row + 1, col, visited);
  count += exploreGrid(grid, row, col - 1, visited);
  count += exploreGrid(grid, row, col + 1, visited);
  return count;
};

const grid = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

let gridMinSize = countTheMinIsland(grid); // -> 1
console.log(gridMinSize, "1");

const grid2 = [
  ["L", "L", "L"],
  ["L", "L", "L"],
  ["L", "L", "L"],
];

let gridMinSize2 = countTheMinIsland(grid2); // -> 9
console.log(gridMinSize2, "9");

const grid3 = [
  ["W", "W", "L"],
  ["L", "W", "W", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W"],
  ["W", "W", "L"],
];

let gridMinSize3 = countTheMinIsland(grid3); // -> 1
console.log(gridMinSize3, "1");
