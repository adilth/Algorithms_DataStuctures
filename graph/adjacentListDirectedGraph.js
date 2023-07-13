/**Description //Adjacency List Directed Graph  Implementation
 *implementation of Adjacency Graph in class AdjacencyGraph
 *
 */

export default class Graph {
  constructor() {
    this.vertices = new Map();
  }
  addVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, new Set());
    }
  }
  removeVertex(vertex) {
    if (this.vertices.has(vertex)) {
      this.vertices.delete(vertex);
      for (const [v, edges] of this.vertices.entries()) {
        edges.delete(vertex);
      }
    }
  }

  addEdge(source, destination) {
    if (this.vertices.has(source) && this.vertices.has(destination)) {
      const edges = this.vertices.get(source);
      edges.add(destination);
    }
  }

  removeEdge(source, destination) {
    if (this.vertices.has(source) && this.vertices.has(destination)) {
      const edges = this.vertices.get(source);
      edges.delete(destination);
    }
  }

  removeAdjacency(vertex) {
    if (this.vertices.has(vertex)) {
      this.vertices.get(vertex).clear();
    }
  }

  bfs(startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    const result = [];

    visited.add(startVertex);
    while (queue.length > 0) {
      const currentVertex = queue.shift();
      result.push(currentVertex);
      const edges = this.vertices.get(currentVertex);
      for (const neighbor of edges) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  dfs(startVertex) {
    const visited = new Set();
    const result = [];
    this.#dfsHelper(startVertex, visited, result);

    return result;
  }

  #dfsHelper(vertex, visited, result) {
    visited.add(vertex);
    result.push(vertex);

    const edges = this.vertices.get(vertex);
    for (const neighbor of edges) {
      if (!visited.has(neighbor)) {
        this.#dfsHelper(neighbor, visited, result);
      }
    }
  }

  areConnected(startVertex, endVertex) {
    if (!this.vertices.has(startVertex) || !this.vertices.has(endVertex)) {
      return false;
    }

    const visited = new Set();
    const stack = [startVertex];
    visited.add(startVertex);
    while (stack.length > 0) {
      const currentVertex = stack.pop();

      if (currentVertex === endVertex) {
        return true;
      }

      const edges = this.vertices.get(currentVertex);
      for (const neighbor of edges) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
    return false;
  }

  findPath(startVertex, endVertex, visited = new Set(), path = []) {
    if (!this.vertices.has(startVertex) || !this.vertices.has(endVertex)) {
      return [];
    }
    const found = this.#findPathHelper(startVertex, endVertex, visited, path);

    if (found) {
      return path;
    }
    return [];
  }

  #findPathHelper(vertex, endVertex, visited, path) {
    visited.add(vertex);
    path.push(vertex);

    if (vertex === endVertex) {
      return true;
    }

    const edges = this.vertices.get(vertex);
    for (const neighbor of edges) {
      if (!visited.has(neighbor)) {
        const found = this.#findPathHelper(neighbor, endVertex, visited, path);
        if (found) {
          return true;
        }
      }
    }

    path.pop();
    return false;
  }

  getAreNeighbors(vertex1, vertex2) {
    if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) {
      return false;
    }

    const edges = this.vertices.get(vertex1);
    return edges.has(vertex2);
  }
  getAllPaths(source, endVertex, visited = new Set(), path = [], paths = []) {
    if (!this.vertices.has(source) || !this.vertices.has(endVertex)) {
      return [];
    }
    this.#getAllPathsHelper(source, endVertex, visited, paths, path);

    return paths;
  }

  #getAllPathsHelper(vertex, endVertex, visited, paths, currentPath) {
    visited.add(vertex);
    currentPath.push(vertex);

    if (vertex === endVertex) {
      paths.push([...currentPath]);
    } else {
      const edges = this.vertices.get(vertex);
      for (const neighbor of edges) {
        if (!visited.has(neighbor)) {
          this.#getAllPathsHelper(
            neighbor,
            endVertex,
            visited,
            paths,
            currentPath
          );
        }
      }
    }

    visited.delete(vertex);
    currentPath.pop();
  }
}
