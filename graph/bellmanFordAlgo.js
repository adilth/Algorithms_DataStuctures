/*Description // Bellman Ford

Find sorter paths for the given node, given a graph of each node and their edge with order node and either distance between them. Also, the function has the node needs a target and will return an object with each path to other nodes, with a distance that needs to take to the target.
*/
/**
 *
 * @param {{String:number}} graph
 * @param {String} start
 * @returns
 */
// export default function BellmanFord(graph, start) {
//   let dist = {};
//   const predecessors = {};

//   for (let vertex in graph) {
//     dist[vertex] = Infinity;
//   }
//   dist[start] = 0;
//   for (let i = 0; i < Object.keys(graph).length; i++) {
//     for (let vertex in graph) {
//       for (let neigh in graph[vertex]) {
//         const weight = graph[vertex][neigh];
//         const totalDist = dist[vertex] + weight;
//         if (totalDist < dist[neigh]) {
//           dist[neigh] = totalDist;
//         }
//       }
//     }
//   }
//   // Check for negative cycles
//   for (let vertex in graph) {
//     for (let neigh in graph[vertex]) {
//       const weight = graph[vertex][neigh];
//       const totalDist = dist[vertex] + weight;
//       if (totalDist < dist[neigh]) {
//         throw new Error("graph contains a cycle");
//       }
//     }
//   }
//   return dist;
// }

// const graph = {
//   A: { B: 5, C: 2 },
//   B: { D: 4 },
//   C: { B: 1, D: 1 },
//   D: {},
// };
export default function bellmanFord(graph, source) {
  if (graph[source] === undefined) return {};
  const nodes = Object.keys(graph);
  const distances = {};

  // Step 1: Initialize distances from source to all other nodes as Infinity
  for (const node of nodes) {
    distances[node] = Infinity;
  }
  distances[source] = 0;

  // Step 2: Relax edges repeatedly (V-1) times
  for (let i = 0; i < nodes.length - 1; i++) {
    for (const node of nodes) {
      const neighbors = graph[node];
      for (const neighbor in neighbors) {
        const weight = distances[node] + neighbors[neighbor];
        if (weight < distances[neighbor]) {
          distances[neighbor] = distances[node] + neighbors[neighbor];
        }
      }
    }
  }
  for (const node of nodes) {
    const neighbors = graph[node];
    for (const neighbor in neighbors) {
      const weight = distances[node] + neighbors[neighbor];
      if (weight < distances[neighbor]) {
        // A negative cycle exists in the graph
        throw new Error("Negative cycle detected in the graph.");
      }
    }
  }
  return distances;
}
const graph2 = {
  A: { B: 2, C: 4 },
  B: { C: 1, D: 7 },
};
console.log(graph2["A"]);
// console.log(BellmanFord({}));
console.log(bellmanFord(graph2, "A"));
