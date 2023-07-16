/** Description // find Adjacency Matrix graph

* @param {number[][]} adjMatrix
 * @param {{sting:number}} vertexIndex
 * @param {String} node
 * @return {string[]}
*/

export default function AdjacencyMatrix(adjMatrix, vertexIndex, node) {
  if (!Object.keys(vertexIndex).includes(node)) return [];
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
/**
 * @param {number[][]} adjMatrix
 * @param {Object} vertexIndex
 * @param {String} nodeA
 * @param {String} nodeB
 * @return {string[]}
 */
export function isConnected(adjMatrix, vertexIndex, nodeA, nodeB) {
  if (
    !Object.keys(vertexIndex).includes(nodeA) ||
    !Object.keys(vertexIndex).includes(nodeB)
  )
    return false;
  if (nodeA === nodeB) return true;
  let nodeIndex1 = vertexIndex[nodeA];
  let nodeIndex2 = vertexIndex[nodeB];
  return !!adjMatrix[nodeIndex1][nodeIndex2];
}
