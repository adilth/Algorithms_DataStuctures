import Graph from "../adjacentListUndirected.js";
import { jest } from "@jest/globals";
jest.useFakeTimers();

describe("testing graph of implement adjacency list directed graph 1", () => {
  let graph;
  beforeEach(() => {
    graph = new Graph();
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
  });

  describe("testing graph of implement an undirected adjacency list ", () => {
    it("should return  all node in graph", () => {
      let nodes = graph.nodes;
      expect([...nodes]).toEqual([1, 2, 3, 4, 6, 7, 33, 5]);
    });
    it("should traverse in dfs way", () => {
      const nodesDFS = [];

      graph.dfs(2, (node) => nodesDFS.push(node));
      expect(nodesDFS).toEqual([2, 5, 1, 4, 3, 7, 6]);
    });
    it("should traverse in bfs way", () => {
      const nodesBFS = [];

      graph.dfs(1, (node) => nodesBFS.push(node));
      expect(nodesBFS).toEqual([1, 5, 2, 3, 4, 6, 7]);
    });
    it("should test if two node are connected or not", () => {
      const areHasPathOne = graph.hasPath(1, 7);
      const areHasPathTwo = graph.hasPath(2, 6);
      const areHasPathThree = graph.hasPath(3, 33);
      // Output: true
      expect(areHasPathOne).toBeTruthy();
      expect(areHasPathTwo).toBeTruthy();
      expect(areHasPathThree).toBeFalsy();
    });
    it("should traverse graph an find path between two nodes", () => {
      const findPath = graph.findPath(1, 7);
      expect(findPath).toEqual([1, 2, 3, 7]);
    });
    it("should return an empty array if no path exists between the vertices", () => {
      const result = graph.findPath(1, 33);
      expect(result).toEqual([]);
    });
    it("should traverse in dfs way", () => {
      const getNeighborsOne = graph.getNeighbors(1);
      const checkNeighborsTwo = graph.getNeighbors(2);
      expect([...getNeighborsOne]).toEqual([5, 2]);
      expect([...checkNeighborsTwo]).toEqual([5, 1, 3]);
    });

    it("should remove an edge between two vertices", () => {
      graph.removeEdge(1, 5);
      expect([...graph.getNeighbors(1)]).toEqual([2]);
    });
    it("should fail to remove an edge between two vertices", () => {
      expect(() => {
        graph.removeEdge(11, 13);
      }).toThrow();
    });
    it("should remove node add all edges", () => {
      graph.removeNode(3);
      expect(graph.adjacencyList[3]).toBeUndefined();
      expect([...graph.getNeighbors(2)]).toEqual([5, 1]);
    });
    it("should fail to remove an edge between two vertices pf removed 3", () => {
      graph.removeNode(3);
      expect(() => {
        graph.removeEdge(3, 2);
      }).toThrow("the vertex 3 || 2  is not in the graph");
    });
    it("should add new vertex and edges", () => {
      graph.addNode(8);
      graph.addEdge(8, 1);
      graph.addEdge(8, 4);
      graph.addEdge(33, 7);
      expect(graph.adjacencyList[8]).toBeDefined();
      expect([...graph.getNeighbors(8)]).toEqual([1, 4]);
      expect(graph.hasPath(33, 1)).toBeTruthy();
    });
    // it("should not add new edges", () => {
    //   expect(() => graph.addEdge(1, 2)).toThrow();
    // });
  });
});
describe("testing graph of implement adjacency list directed graph 1", () => {
  let graph = new Graph();
  it("should return empty graph", () => {
    expect([...graph.nodes]).toEqual([]);
  });
});
