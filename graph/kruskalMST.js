/*Description // kruskal algorithm
write weighted undirected Adjacency list class for kruskal algorithm in minimum spanning tree
*/

import { DisjointSet } from "../disjointSet/disjointSet.js";

export default class KruskalAlgo {
  constructor() {
    this.connection = new Map();
    this.nodes = 0;
  }
  #addNode(node) {
    if (typeof node === "number" || typeof node === "string") {
      if (!this.connection.has(node)) {
        this.connection.set(node, new Map());
        this.nodes++;
      }
    } else {
      throw new Error("Invalid node name");
    }
  }
  addEdge(node1, node2, weight) {
    if (node1 == null || node2 == null) throw new Error("missing node");
    if (typeof weight !== "number") {
      throw new Error("Invalid edge weight. Weight must be a number.");
    }
    this.#addNode(node1);
    this.#addNode(node2);
    this.connection.get(node1).set(node2, weight);
    this.connection.get(node2).set(node1, weight);
  }
  kruskalMST() {
    const edges = [];
    const visited = new Set();
    for (const start of this.connection.keys()) {
      for (const end of this.connection.get(start).keys()) {
        if (!visited.has(`${end} ${start}`)) {
          visited.add(`${end} ${start}`);
          edges.push([start, end, this.connection.get(start).get(end)]);
        }
      }
    }
    edges.sort((a, b) => a[2] - b[2]);
    const disjoint = new DisjointSet();
    disjoint.makeSet(this.connection.keys());
    const graph = new KruskalAlgo();
    let numEdge = 0;
    let index = 0;
    while (numEdge < this.nodes - 1 && edges[index] !== undefined) {
      const [u, v, w] = edges[index];
      index += 1;
      if (disjoint.find(u) !== disjoint.find(v)) {
        numEdge += 1;
        graph.addEdge(u, v, w);
        disjoint.union(u, v);
      }
    }
    return graph;
  }
}
const graph = new KruskalAlgo();
graph.addEdge("A", "B", 1);
graph.addEdge("B", "C", 2);
graph.addEdge("D", "E", 3);
graph.addEdge("A", "D", 1);

console.log(graph.kruskalMST());
