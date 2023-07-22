/** Description //connected components count

Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.
@param {{number:number[]}} graph
@return {number}
*/

export default function connectedComponentsCount(graph) {
  let visit = new Set();
  let count = 0;
  for (let node in graph) {
    if (checkAll(graph, node, visit)) {
      count++;
    }
  }
  return count;
}

/**
 *
 * @param {{number:number[]}} graph
 * @param {number} current
 * @param {Set} visit
 * @returns boolean
 */
export const checkAll = (graph, current, visit) => {
  if (visit.has(current.toString())) return false;
  visit.add(current.toString());

  for (let neigh of graph[current.toString()]) {
    checkAll(graph, neigh, visit);
  }
  return true;
};
