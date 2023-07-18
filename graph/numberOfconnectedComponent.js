import { DisjointSetLength } from "../disjointSet/disjointSet.js";
/**Description // number of connected components in undirected graph
 * you gave graph of n nodes , you ara given integer n and array edges where edges[i] = [a,b] indicate that there is connect between nodes a and b
 * return the number of connected components
 * @function numsConnectComponent
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

export default function numsConnectComponent(n, edges) {
  let unionFind = new DisjointSetLength(n);

  for (let [n1, n2] of edges) {
    unionFind.union(n1, n2);
  }
  return unionFind.size;
}

console.log(
  numsConnectComponent(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
); //2
