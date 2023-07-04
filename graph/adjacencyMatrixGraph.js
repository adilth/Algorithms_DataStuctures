/** Description // find Adjacency Matrix graph

* @param {number[][]} adjMatrix
 * @param {string[]} nodes
 * @return {string[]}
*/

function AdjacencyMatrix(adjMatrix, vertexIndex, node) {
  let adjacentNode = [];
  for (const [key, value] of Object.entries(vertexIndex)) {
    let nodeVertex = vertexIndex[node];
    if (adjMatrix[nodeVertex][value] === 1) {
      adjacentNode.push(key);
    }
  }
  return adjacentNode;
}

//IsConnected

function isConnected(nodeA, nodeB) {
  let nodeIndex1 = vertexIndex[nodeA];
  let nodeIndex2 = vertexIndex[nodeB];
  return !!adjMatrix[nodeIndex1][nodeIndex2];
}
nodes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
let vertexIndex = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
};
const adjMatrix = [
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0],
];

console.log(AdjacencyMatrix(adjMatrix, vertexIndex, "D")); //[ 'A', 'C', 'E', 'F' ]
console.log(isConnected("A", "D"));
