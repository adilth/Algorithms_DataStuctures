/**Description // floyd WarShall algorithm
The Floyd Warshall Algorithm is for solving all pairs of shortest-path problems. The problem is to find the shortest distances between every pair of vertices in a given edge-weighted directed Graph. 
@param  {Number[][]} dist
@return {Number[][]}
*/

export default function floydWarShall(graph) {
  const V = graph.length;
  const dist = new Array(V).fill(0).map(() => new Array(V).fill(Infinity));

  // Initialize the distance array with direct edge weights
  for (let i = 0; i < V; i++) {
    for (let j = 0; j < V; j++) {
      if (i === j) {
        dist[i][j] = 0;
      } else if (graph[i][j] !== undefined) {
        dist[i][j] = graph[i][j];
      }
    }
  }

  // Compute shortest distances for all pairs of vertices
  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
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
let dist = [
  [0, 1],
  [1, 0],
  [Infinity, Infinity],
];

console.log(floydWarShall(grid)); //[ [ 0, 1, 2, 3 ], [ 1, 0, 3, 4 ], [ 2, 3, 0, 1 ], [ 3, 4, 1, 0 ] ]
console.log(floydWarShall(dist));
