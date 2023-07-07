/*Description // floyd WarShall algorithm
The Floyd Warshall Algorithm is for solving all pairs of shortest-path problems. The problem is to find the shortest distances between every pair of vertices in a given edge-weighted directed Graph. 

*/

function floydWarShall(dist) {
  for (let k = 0; k < dist.length; k++) {
    for (let i = 0; i < dist.length; i++) {
      for (let j = 0; j < dist.length; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          // dist from i to j via k is lesser than the current distance
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
}

let grid = [
  [0, 1, 2, Infinity],
  [1, 0, Infinity, Infinity],
  [2, Infinity, 0, 1],
  [Infinity, Infinity, 1, 0],
];

console.log(floydWarShall(grid)); //[ [ 0, 1, 2, 3 ], [ 1, 0, 3, 4 ], [ 2, 3, 0, 1 ], [ 3, 4, 1, 0 ] ]
