/*Description //short path in graph
find the shortest path in the graph and return number of nodes take to target node you will get edges for nodes and start node and target node and return number that take to target node
*/
/**
 * @param {Array<Number| String>} edges
 * @param {Number | String} nodeA
 * @param {Number | String} nodeB
 * @returns {Number}
 */
export default function shortestPath(edges, nodeA, nodeB) {
  if (!Array.isArray(edges) || edges.length === 0) return -1;
  let graph = convertToGraph(edges);
  let visited = new Set([nodeA]);
  let queue = [[nodeA, 0]];
  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === nodeB) return distance;
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
}

export function convertToGraph(edges) {
  let graph = {};
  for (let [a, b] of edges) {
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[b].push(a);
    graph[a].push(b);
  }
  return graph;
}
