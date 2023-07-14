/*Description //binary lifting 
implement a binary lifting technique that is used to find the kth ancestor of a node in a rooted tree with N nodes
 * It can be used to find Lowest Common Ancestor of two nodes in O(log N)

*/

class BinaryLifting {
  constructor(root, tree) {
    this.root = root;
    this.connection = new Map();
    this.up = new Map();
    for (const [i, j] of tree) {
      this.addEdge(i, j);
    }
    this.n = this.connection.size;
    this.logN = Math.ceil(Math.log2(this.n));
    this.dfs(root, root);
  }
  addNode(node) {
    this.connection.set(node, new Set());
  }
  addEdge(node1, node2) {
    if (!this.connection.has(node1)) this.addNode(node1);
    if (!this.connection.has(node2)) this.addNode(node2);
    this.connection.get(node1).add(node2);
    this.connection.get(node2).add(node1);
  }
  dfs(node, parent) {
    this.up.set(node, new Map());
    this.up.get(node).set(0, parent);
    for (let i = 1; i < this.logN; i++) {
      this.up
        .get(node)
        .set(i, this.up.get(this.up.get(node).get(i - 1)).get(i - 1));
    }
    for (const child of this.connection.get(node)) {
      if (child !== parent) this.dfs(child, node);
    }
  }
  kthAncestor(node, k) {
    if (k >= this.connection.size) return this.root;
    for (let i = 0; i < this.logN; i++) {
      if (k >= Math.pow(2, i)) {
        node = this.up.get(node).get(i);
      }
      // if (k & (1 << i)) {
      //   node = this.up.get(node).get(i);
      // }
    }
    return node;
  }
  getKthAncestor(node, k) {
    //  this.dfs(0, -1); // start dfs from root node
    return this.kthAncestor(node, k);
  }
}
function binaryLifting(root, tree, queries) {
  const graphObject = new BinaryLifting(root, tree);
  const ancestors = [];
  for (const [node, k] of queries) {
    const ancestor = graphObject.kthAncestor(node, k);
    ancestors.push(ancestor);
  }
  return ancestors;
}

const root = 0;
const graph = [
  [0, 1],
  [0, 3],
  [0, 5],
  [5, 6],
  [1, 2],
  [1, 4],
  [4, 7],
  [7, 11],
  [7, 8],
  [8, 9],
  [9, 10],
];
const queries = [
  [2, 1],
  [6, 1],
  [7, 2],
  [8, 2],
  [10, 2],
  [10, 3],
  [10, 5],
  [11, 3],
];
const kthAncestors = binaryLifting(root, graph, queries);

// const binaryLifting = new BinaryLifting(0, tree);

// console.log(kthAncestors);

let map = new Map();
map.set(2, new Map());
map.set(3, new Map());
map.set(5, new Map());
map.get(2).set(4, ["q"]);
console.log(map.get(2).get(4));

console.log(Object.keys(map));
