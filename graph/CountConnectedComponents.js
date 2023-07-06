/* Description //connected components count

Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.
*/

const connectedComponentsCount = (graph) => {
  let visit = new Set();
  let count = 0;

  for (let node in graph) {
    if (checkAll(graph, node, visit)) {
      count++;
    }
  }
  return count;
};
const checkAll = (graph, current, visit) => {
  if (visit.has(+current)) return false;
  visit.add(+current);
  for (let neigh of graph[current]) {
    checkAll(graph, neigh, visit);
  }
  return true;
};
let graph1 = connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}); // -> 2
console.log("🚀 ~ file: challengeGraphCountComp.js:33 ~ graph1", graph1);

let graph2 = connectedComponentsCount({
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1],
}); // -> 3
console.log("🚀 ~ file: challengeGraphCountComp.js:45 ~ graph2", graph2);
