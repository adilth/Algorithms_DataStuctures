/**Description //Adjacency List Undirected Graph  Implementation
 *implementation of Adjacency Graph in class AdjacencyGraph
 *
 */

class Graph {
  constructor() {
    this.nodes = new Set();
    this.adjacencyList = {};
  }
  addNode(node) {
    // if (!this.adjacencyList[node]) {
    this.nodes.add(node);
    this.adjacencyList[node] = new Set();
    // }
  }
  addEdge(node1, node2) {
    if (!this.nodes.has(node1)) {
      this.addNode(node1);
    }
    if (!this.nodes.has(node2)) {
      this.addNode(node2);
    }
    this.adjacencyList[node1].add(node2);
    this.adjacencyList[node2].add(node1);
  }
  removeNode(node) {
    if (this.nodes.has(node)) {
      this.nodes.delete(node);
      //remove edges that connected to the node
      this.adjacencyList[node].forEach((value) => {
        this.adjacencyList[node].delete(value);
      });

      delete this.adjacencyList[node];
    }
  }
  removeEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      this.adjacencyList[node1].delete(node1);
      this.adjacencyList[node2].delete(node2);
    }
  }
  dfs(start, visitFn) {
    const visited = new Set();
    this.#_dfs(start, visited, visitFn);
  }
  #_dfs(node, visited, visitFn) {
    visited.add(node);
    visitFn(node);
    for (let neighbor of this.adjacencyList[node]) {
      if (!visited.has(neighbor)) this.#_dfs(neighbor, visited, visitFn);
    }
  }
  bfs(start, visitFn) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    while (queue.length) {
      const node = queue.shift();
      visitFn(node);
      for (let neighbor of this.adjacencyList[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
  hasPath(start, destination) {
    const visited = new Set();

    this.#_hasPath(start, destination, visited);
    return visited.has(destination);
  }
  #_hasPath(node, destination, visited) {
    visited.add(node);
    for (let neighbor of this.adjacencyList[node]) {
      if (!visited.has(neighbor))
        this.#_hasPath(neighbor, destination, visited);
    }
  }
  findPath(start, destination) {
    const visited = new Set();
    const paths = {};
    const queue = [start];
    visited.add(start);
    while (queue.length) {
      const node = queue.shift();
      for (let neighbor of this.adjacencyList[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          paths[neighbor] = node;
          if (neighbor === destination) {
            return this.#_getPath(start, destination, paths);
          }
          queue.push(neighbor);
        }
      }
    }
    return null;
  }
  #_getPath(start, destination, paths) {
    const path = [destination];
    let parent = paths[destination];
    while (parent) {
      path.unshift(parent);
      if (parent === start) break;
      parent = paths[parent];
    }
    return path;
  }
  getNeighbors(node) {
    if (!this.adjacencyList[node]) return [];
    return this.adjacencyList[node];
  }
}

const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(6);
graph.addNode(7);
graph.addNode(33);

graph.addEdge(1, 5);
graph.addEdge(2, 5);
graph.addEdge(1, 2);
graph.addEdge(3, 2);
graph.addEdge(4, 5);
graph.addEdge(3, 4);
graph.addEdge(7, 6);
graph.addEdge(6, 4);
graph.addEdge(7, 3);

console.log(graph.nodes);
console.log(graph.adjacencyList);

const nodesDFS = [];

graph.dfs(2, (node) => nodesDFS.push(node));

console.log(nodesDFS);
const nodesBFS = [];

graph.bfs(1, (node) => nodesBFS.push(node));
console.log(nodesBFS);

console.log(graph.hasPath(1, 5)); //true
console.log(graph.hasPath(5, 33)); //false
console.log(graph.hasPath(1, 7)); //tru

console.log(graph.findPath(1, 7)); //[ 1, 2, 3, 7 ]
