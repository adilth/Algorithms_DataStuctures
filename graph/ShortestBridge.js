/*Description // Shortest Bridge
You are given an n x n binary matrix grid where 1 represents land and 0 represents water.

An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.

You may change 0's to 1's to connect the two islands to form one island.

Return the smallest number of 0's you must flip to connect the two islands.
*@param {number[][]} grid
*@return {number}
*/
const direct = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
const dfs = (grid, visit, row, col) => {
  let invalid = row < 0 || col < 0 || row == grid.length || col == grid.length;
  let pos = row + "," + col;
  if (invalid || !grid[row][col] || visit.has(pos)) return;
  visit.add(pos);
  for (let [dr, dc] of direct) {
    dfs(grid, visit, row + dr, col + dc);
  }
};
const bfs = (grid, visit) => {
  let res = 0;
  let queue = Array.from(visit, (n) => n.split(",").map(Number));
  console.log(queue);
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let [r, c] = queue.shift();
      for (let [dr, dc] of direct) {
        let [curR, curC] = [r + dr, c + dc];
        let pos = curR + "," + curC;
        if (
          curR < 0 ||
          curC < 0 ||
          curR === grid.length ||
          curR === grid[0].length ||
          visit.has(pos)
        )
          continue;
        if (grid[curR][curC]) return res;
        visit.add(pos);
        queue.push([curR, curC]);
      }
    }
    res++;
  }
};
/**
 *
 * @param {Number[][]} grid
 * @returns {number | undefined}
 */
export default function shortestBridge(grid) {
  const visit = new Set();
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      if (grid[row][col]) {
        dfs(grid, visit, row, col);
        return bfs(grid, visit);
      }
    }
  }
}

console.log(
  shortestBridge([
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1],
  ])
);
console.log(shortestBridge([[], [], []]));
console.log(
  shortestBridge([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ])
);
