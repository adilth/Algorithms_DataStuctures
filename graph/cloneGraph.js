/*Description // clone a graph
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.
*/
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

function cloneGraph(node) {
  let fromOldToNew = {};
  const dfs = (node) => {
    if (!node) return node;
    if (fromOldToNew[node.val]) return fromOldToNew[node.val];
    let copy = new Node(node.val);
    fromOldToNew[node.val] = copy;
    for (let nei of node.neighbors) {
      copy.neighbors.push(dfs(nei));
    }
    return copy;
  };
  return dfs(node);
}
/*
var cloneGraph = function (node, map = new Map()) {
  if (!node) return null;
  if (map.has(node)) return map.get(node);
  const n = new Node(node.val);
  map.set(node, n);
  for (let k of node.neighbors) {
    n.neighbors.push(cloneGraph(k, map));
  }
  return n;
};
*/
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];
console.log(cloneGraph(node1));
