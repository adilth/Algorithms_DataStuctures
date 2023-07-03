/**Description //Adjacency List Directed Graph  Implementation
 *implementation of Adjacency Graph in class AdjacencyGraph
 *
 */

class Node {
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
  isAdjacent(node) {
    return this.adjacent.indexOf(node) > -1;
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
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
  addVertex(value) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    } else {
      const vertex = new Node(value);
      this.nodes.set(value, vertex);
      return vertex;
    }
  }
  removeVertex(value) {
    const current = this.nodes.get(value);
    if (current) {
      for (const node of this.nodes.values()) {
        node.removeAdjacency(current);
      }
    }
    return this.nodes.delete(value);
  }
  removeEdges(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);
    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacency(destinationNode);
      // if (this.edgeDirection === Graph.UNDIRECTED) {
      destinationNode.removeAdjacency(sourceNode);
      // }
    }
    return [sourceNode, destinationNode];
  }
  bfs(source) {
    if (source === null) return [];
    let queue = [this.nodes.get(source)];
    const visited = new Set();
    const values = [];
    while (queue.length) {
      let node = queue.shift();
      if (node && !visited.has(node)) {
        visited.add(node);
        values.push(node.value);
        for (const neighbor of node.getAdjacency()) {
          if (!visited.has(neighbor)) queue.push(neighbor);
        }
      }
    }
    return values;
  }
  dfs(source) {
    const visited = new Set();
    const visitList = [this.nodes.get(source)];
    const values = [];

    while (visitList.length) {
      const node = visitList.pop();
      if (node && !visited.has(node)) {
        visited.add(node);
        values.push(node.value);
        for (const neighbor of node.getAdjacency()) {
          if (!visited.has(neighbor)) visitList.push(neighbor);
        }
      }
    }
    return values;
  }
  areConnectedDFS(source, destination) {
    const visited = new Set();
    const stack = [this.nodes.get(source)];
    while (stack.length) {
      const current = stack.pop();
      if (current.value === destination) return true;
      visited.add(current);
      for (const node of current.getAdjacency()) {
        if (!visited.has(node)) stack.push(node);
      }
    }
    return false;
  }
  findPath(source, destination) {
    const visited = new Set();
    const queue = [[this.nodes.get(source), []]];

    while (queue.length) {
      let [currentNode, currentPath] = queue.shift();
      if (currentNode.value === destination.value) {
        return [...currentPath, currentNode.value];
      }
      visited.add(currentNode);
      for (let neighbor of currentNode.getAdjacency()) {
        if (!visited.has(neighbor)) {
          queue.push([neighbor, [...currentPath, currentNode.value]]);
        }
      }
    }
    return [];
  }
  findPath(source, destination) {
    const visited = new Set();
    const stack = [this.nodes.get(source)];
    const parent = new Map();
    parent.set(start, null);
    while (stack.length) {
      let node = stack.pop();
      if (!visited.has(node)) {
        visited.add(node);
        if (node.value === destination) {
          const path = [destination];
          let current = node;
          while (current !== start) {
            path.unshift(parent.get(current));
            current = parent.get(current);
          }
          return path;
        }
        for (let neighbor of node.getAdjacency()) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
            parent.set(neighbor, node);
          }
        }
      }
    }
  }
  getAreNeighbors(node) {
    return node.getAdjacency().map((neighbor) => neighbor.value);
  }
  getAllPaths(source, endNode, path = [], paths = []) {
    path.push(source.value);
    if (source === endNode) {
      paths.push([...path]);
    } else {
      for (const neighbor of source.getAdjacency()) {
        if (!path.includes(neighbor.value)) {
          this.getAllPaths(neighbor, endNode, path, paths);
        }
      }
    }
    path.pop();
    return paths;
  }
}

const graph = new Graph();

const first = graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(5, 2);
graph.addEdge(6, 3);
graph.addEdge(7, 3);
graph.addEdge(8, 4);
graph.addEdge(9, 5);
graph.addEdge(10, 6);

console.log(graph.areConnectedDFS(9, 2));
const d = graph.dfs(1);
console.log(d);
console.log(graph.getAllPaths(1, 5));
