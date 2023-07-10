/*Description //short path in graph

*/

function shortestPath(edges, nodeA, nodeB) {
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

function convertToGraph(edges) {
  let graph = {};
  for (let [a, b] of edges) {
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[b].push(a);
    graph[a].push(b);
  }
  return graph;
}

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];
const shortOne = shortestPath(edges, "w", "z"); // -> 2
console.log(shortOne);
const edges2 = [
  ["a", "c"],
  ["a", "b"],
  ["c", "b"],
  ["c", "d"],
  ["b", "d"],
  ["e", "d"],
  ["g", "f"],
];

const shortTwo = shortestPath(edges2, "a", "e"); // -> 3
console.log(shortTwo);

const edges3 = [
  ["a", "c"],
  ["a", "b"],
  ["c", "b"],
  ["c", "d"],
  ["b", "d"],
  ["e", "d"],
  ["g", "f"],
];

const shortThree = shortestPath(edges3, "b", "g"); // -> -1
console.log(shortThree);
