/**Description // topological sort Graph
 * general topological sort
 *
 *
 *
 */

export class Node {
  constructor(value) {
    this.value = value;
    this.adjacent = [];
  }
  addAdjacency(node) {
    this.adjacent.push(node);
  }
  removeAdjacency(node) {
    const index = this.adjacent.indexOf(node);
    if (index > -1) {
      this.adjacent.splice(index, 1);
      return node;
    }
  }
  getAdjacency() {
    return this.adjacent;
  }
  iConnected(node) {
    return this.adjacent.indexOf(node) > -1;
  }
}

export default class Graph {
  constructor() {
    this.nodes = new Map();
  }
  addToGraph(value) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    } else {
      const vertex = new Node(value);
      this.nodes.set(value, vertex);
      return vertex;
    }
  }
  addEdge(source, target) {
    if (!this.nodes.has(source)) {
      this.nodes.set(source, new Node(source));
    }
    if (!this.nodes.has(target)) {
      this.nodes.set(target, new Node(target));
    }
    this.nodes.get(source).addAdjacency(this.nodes.get(target));
    return this;
  }
  topologicalSort() {
    let visited = new Set();
    let topological = [];
    for (const node of this.nodes.values()) {
      this.depthFirstSearch(node, visited, topological);
    }
    return topological.reverse();
  }
  depthFirstSearch(start, visited, topological) {
    if (visited.has(start)) return;
    visited.add(start);
    for (const neighbor of start.adjacent) {
      this.depthFirstSearch(neighbor, visited, topological);
    }
    topological.push(start.value);
  }
}

let graph = new Graph();

graph.addToGraph("A");
graph.addToGraph("B");
graph.addToGraph("C");
graph.addToGraph("D");
graph.addToGraph("F");
graph.addToGraph("E");

graph.addEdge("A", "C");
graph.addEdge("A", "B");
graph.addEdge("B", "D");
graph.addEdge("D", "F");
graph.addEdge("E", "C");
graph.addEdge("E", "F");
console.log(graph);
console.log(graph.topologicalSort());
