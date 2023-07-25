/** * Description //Find if Path Exists in Graph
 There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
function buildGraph(edges) {
  const graph = new Map();
  edges.forEach(([a, b]) => {
    if (!graph.has(a)) {
      graph.set(a, new Set());
    }
    if (!graph.has(b)) {
      graph.set(b, new Set());
    }
    graph.get(a).add(b);
    graph.get(b).add(a);
  });
  return graph;
}
export default function pathExists(n, edges, start, end) {
  if (!Array.isArray(edges) || edges.length === 0) return false;
  if (start === end) {
    return true;
  }
  let graph = buildGraph(edges);
  //prevent revisiting nodes
  const visited = new Array(n);
  let queue = [start];
  while (queue.length) {
    let current = queue.shift();
    if (current === end) {
      return true;
    }
    visited[current] = true;
    graph.get(current).forEach((neighbor) => {
      if (!visited[neighbor]) queue.push(neighbor);
    });
  }
  return false;
}

console.log(
  pathExists(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
      [3, 2],
      [3, 4],
    ],
    0,
    3
  )
);
