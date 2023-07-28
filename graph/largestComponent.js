/**  description // largest component in graph
@param {Object.<number, string[]>} graph
@return {Number}
*/

export default function largestComponent(graph) {
  if (typeof graph !== "object" || !Object.keys(graph).length) return 0;
  let largest = 0;
  let visited = new Set();
  for (let node in graph) {
    let size = checkAllNodes(graph, node, visited);
    if (size > largest) largest = size;
  }
  return largest;
}

/**
 *
 * @param {{Object.<number, string[]>}} graph
 * @param {String} currentNode
 * @param {Set<String>} visited
 * @returns {Number }
 */
export function checkAllNodes(graph, currentNode, visited) {
  let count = 1;
  if (visited.has(currentNode)) return 0;
  visited.add(currentNode);
  for (let neighbor of graph[currentNode]) {
    neighbor = neighbor.toString();
    count += checkAllNodes(graph, neighbor, visited);
  }

  return count;
}
