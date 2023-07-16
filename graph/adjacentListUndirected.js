/**Description //Adjacency List Undirected Graph  Implementation
 *implementation of Adjacency Graph in class AdjacencyGraph
 *
 */

export default class Graph {
  constructor() {
    this.nodes = new Set();
    this.adjacencyList = {};
  }
  addNode(node) {
    if (!this.adjacencyList[node]) {
      this.nodes.add(node);
      this.adjacencyList[node] = new Set();
    } else {
      throw new Error("node already added");
    }
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

    // throw new Error("Edge has already been added before");
  }
  getVertices(node) {
    return this.adjacencyList[node];
  }
  removeNode(node) {
    if (this.nodes.has(node)) {
      //remove edges that connected to the node
      this.adjacencyList[node].forEach((value) => {
        this.removeEdge(value, node);
        this.adjacencyList[node].delete(value);
      });
      this.nodes.delete(node);

      delete this.adjacencyList[node];
    }
  }
  removeEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      if (!this.adjacencyList[node1].has(node2)) {
        throw new Error("there is no such edge");
      } else {
        this.adjacencyList[node1].delete(node2);
        this.adjacencyList[node2].delete(node1);
      }
    } else {
      throw new Error(`the vertex ${node1} || ${node2}  is not in the graph`);
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
    return [];
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
