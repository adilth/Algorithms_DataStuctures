/**  description // largest component in graph
@param {Object.<number, string[]>} graph
@return {Number}
*/

const largestComponent = (graph) => {
  let largest = 0;
  let visited = new Set();
  for (let node in graph) {
    let size = checkAllNodes(graph, node, visited);
    if (size > largest) largest = size;
  }
  return largest;
};

function checkAllNodes(graph, currentNode, visited) {
  let count = 1;
  if (visited.has(currentNode)) return false;
  visited.add(currentNode);
  for (let neighbor of graph[currentNode]) {
    count += checkAllNodes(graph, neighbor, visited);
  }
  return count;
}

let graph1 = largestComponent({
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
});
console.log("🚀 ~ file: challengeGraphAlgolargestCompo.js:36 ~ graph1", graph1); //4

let graph2 = largestComponent({
  1: ["2"],
  2: ["1", "8"],
  6: ["7"],
  9: ["8"],
  7: ["6", "8"],
  8: ["9", "7", "2"],
});
console.log("🚀 ~ file: challengeGraphAlgolargestCompo.js:46 ~ graph2", graph2); //6
