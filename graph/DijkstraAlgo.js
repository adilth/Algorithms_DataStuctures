/**Description // Dijkstra algorithm
 * Dijkstra's Algorithm calculates the minimum distance between two nodes.
 * It is used to find the shortest path.
 * It uses graph data structure.
 */

/**
 *
 * @param {number} V number of vertices
 * @param {Number[][]}
 *@return {never[][]}
 */

export function createGraph(V, E) {
  if (!Number.isInteger(V) || V <= 0) {
    throw new Error("Number of vertices (V) must be a positive integer.");
  }

  if (!Array.isArray(E)) {
    throw new Error("Edges (E) must be an array of [src, dest, weight].");
  }

  for (const edge of E) {
    if (!Array.isArray(edge) || edge.length !== 3) {
      throw new Error("Edges (E) must be an array of [src, dest, weight].");
    }
  }
  const adjList = []; // Adjacency list
  for (let i = 0; i < V; i++) {
    adjList.push([]);
  }
  for (let i = 0; i < E.length; i++) {
    const [src, dest, weight] = E[i];
    if (src < 0 || src >= V || dest < 0 || dest >= V) {
      throw new Error("Invalid vertex in edge. Vertex index out of bounds.");
    }
    adjList[src].push([dest, weight]);
    adjList[dest].push([src, weight]);
  }
  return adjList;
}

/**
 *
 * @param {number[][][]} graph
 * @param {Number} V
 * @param {Number} src
 * @returns {number[][]}
 */
export default function dijkstra(graph, V, src) {
  if (!Array.isArray(graph) || graph.some((item) => !Array.isArray(item))) {
    throw new Error(
      "Graph must be represented as an adjacency list (array of arrays)."
    );
  }
  if (!Number.isInteger(V) || V <= 0) {
    throw new Error("Number of vertices (V) must be a positive integer.");
  }
  if (!Number.isInteger(src) || src < 0 || src >= V) {
    throw new Error(
      "Source node must be a non-negative integer within the range of vertices."
    );
  }
  const vis = Array(V).fill(0);
  const dist = [];
  for (let i = 0; i < V; i++) dist.push([10000, -1]);
  dist[src][0] = 0;

  for (let i = 0; i < V - 1; i++) {
    let mn = -1;
    for (let j = 0; j < V; j++) {
      if (vis[j] === 0) {
        if (mn === -1 || dist[j][0] < dist[mn][0]) mn = j;
      }
    }

    vis[mn] = 1;
    for (let j = 0; j < graph[mn].length; j++) {
      const edge = graph[mn][j];
      if (vis[edge[0]] === 0 && dist[edge[0]][0] > dist[mn][0] + edge[1]) {
        dist[edge[0]][0] = dist[mn][0] + edge[1];
        dist[edge[0]][1] = mn;
      }
    }
  }

  return dist;
}
const V = 4;
const E = [
  [0, 1, 4],
  [0, 7, 8],
  [1, 7, 11],
  [1, 2, 8],
  [7, 8, 7],
  [6, 7, 1],
  [2, 8, 2],
  [6, 8, 6],
  [5, 6, 2],
  [2, 5, 4],
  [2, 3, 7],
  [3, 5, 14],
  [3, 4, 9],
  [4, 5, 10],
];
const graph = createGraph(V, E);
console.log(graph);
console.log(dijkstra(graph, V, 0));
