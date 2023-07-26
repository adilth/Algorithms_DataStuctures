import AdjacencyMatrix, { isConnected } from "../adjacencyMatrixGraph.js";

describe("AdjacencyMatrix function", () => {
  it("should return the correct adjacent nodes for a simple adjacency matrix", () => {
    const adjMatrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ];
    const vertexIndex = { A: 0, B: 1, C: 2 };
    const node = "B";
    const result = AdjacencyMatrix(adjMatrix, vertexIndex, node);
    expect(result).toEqual(["A", "C"]);
  });

  it("should return an empty array if the node has no adjacent nodes", () => {
    const adjMatrix = [
      [0, 0],
      [0, 0],
    ];
    const vertexIndex = { X: 0, Y: 1 };
    const node = "X";
    const result = AdjacencyMatrix(adjMatrix, vertexIndex, node);
    expect(result).toEqual([]);
  });

  it("should return an empty array if the adjacency matrix is empty", () => {
    const adjMatrix = [];
    const vertexIndex = {};
    const node = "A";
    const result = AdjacencyMatrix(adjMatrix, vertexIndex, node);
    expect(result).toEqual([]);
  });

  it("should return an empty array if the node is not present in the vertex index", () => {
    const adjMatrix = [
      [0, 1],
      [1, 0],
    ];
    const vertexIndex = { X: 0, Y: 1 };
    const node = "Z";
    const result = AdjacencyMatrix(adjMatrix, vertexIndex, node);
    expect(result).toEqual([]);
  });

  it("should return the correct adjacent nodes for a complex adjacency matrix", () => {
    const adjMatrix = [
      [0, 1, 0, 1],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [1, 0, 1, 0],
    ];
    const vertexIndex = { A: 0, B: 1, C: 2, D: 3 };
    const node = "A";
    const result = AdjacencyMatrix(adjMatrix, vertexIndex, node);
    expect(result).toEqual(["B", "D"]);
  });
  it("should return the correct adjacent nodes for a complex adjacency matrix", () => {
    const adjMatrix = [
      [0, 1, 0, 1, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0],
    ];
    const vertexIndex = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
    };
    const nodeOne = "D";
    const nodeTwo = "E";
    const result = AdjacencyMatrix(adjMatrix, vertexIndex, nodeOne);
    const result2 = AdjacencyMatrix(adjMatrix, vertexIndex, nodeTwo);
    expect(result).toEqual(["A", "C", "E", "F"]);
    expect(result2).toEqual(["D", "G"]);
  });
});

describe("isConnected function", () => {
  it("should return true when nodes are connected in a simple adjacency matrix", () => {
    const adjMatrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ];
    const vertexIndex = { A: 0, B: 1, C: 2 };
    const nodeA = "A";
    const nodeB = "B";
    const result = isConnected(adjMatrix, vertexIndex, nodeA, nodeB);
    expect(result).toBeTruthy();
  });

  it("should return false when nodes are not connected in a simple adjacency matrix", () => {
    const adjMatrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ];
    const vertexIndex = { A: 0, B: 1, C: 2 };
    const nodeA = "A";
    const nodeB = "C";
    const result = isConnected(adjMatrix, vertexIndex, nodeA, nodeB);
    expect(result).toBeFalsy();
  });
  it("should return false when nodes are not connected in a complex adjacency matrix", () => {
    const adjMatrix = [
      [0, 1, 0, 1],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [1, 0, 1, 0],
    ];
    const vertexIndex = { A: 0, B: 1, C: 2, D: 3 };
    const nodeA = "A";
    const nodeB = "C";
    const result = isConnected(adjMatrix, vertexIndex, nodeA, nodeB);
    expect(result).toBeFalsy();
  });

  it("should return false when nodes are not present in the vertex index", () => {
    const adjMatrix = [
      [0, 1],
      [1, 0],
    ];
    const vertexIndex = { X: 0, Y: 1 };
    const nodeA = "Z";
    const nodeB = "X";
    const result = isConnected(adjMatrix, vertexIndex, nodeA, nodeB);
    expect(result).toBeFalsy();
  });

  it("should return true when both arguments represent the same node", () => {
    const adjMatrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ];
    const vertexIndex = { A: 0, B: 1, C: 2 };
    const nodeA = "A";
    const nodeB = "A";
    const result = isConnected(adjMatrix, vertexIndex, nodeA, nodeB);
    expect(result).toBeTruthy();
  });
});
