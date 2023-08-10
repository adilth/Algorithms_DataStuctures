import { DisjointSet, DisjointSetLength } from "../disjointSet";

describe("DisjointSet class", () => {
  // Test case 1: Test makeSet and find operations
  it("should correctly create disjoint sets and find elements", () => {
    const disjoint = new DisjointSet();
    disjoint.makeSet([1, 2, 3, 4, 5]);

    // Elements 1, 2, 3, 4, 5 should be in their own disjoint sets
    expect(disjoint.find(1)).toBe(1);
    expect(disjoint.find(2)).toBe(2);
    expect(disjoint.find(3)).toBe(3);
    expect(disjoint.find(4)).toBe(4);
    expect(disjoint.find(5)).toBe(5);
  });

  // Test case 2: Test union operation
  it("should correctly perform union operations on disjoint sets", () => {
    const disjoint = new DisjointSet();
    disjoint.makeSet([1, 2, 3, 4, 5]);

    // Merge sets containing elements 1 and 2
    disjoint.union(1, 2);
    expect(disjoint.find(1)).toBe(disjoint.find(2));

    // Merge sets containing elements 3 and 4
    disjoint.union(3, 4);
    expect(disjoint.find(3)).toBe(disjoint.find(4));

    // Merging sets containing elements 2 and 4
    disjoint.union(2, 4);

    // After the unions, elements 1, 2, 3, and 4 should be in the same set, while 5 is in its own set
    expect(disjoint.find(1)).toBe(disjoint.find(2));
    expect(disjoint.find(1)).toBe(disjoint.find(3));
    expect(disjoint.find(1)).toBe(disjoint.find(4));
    expect(disjoint.find(5)).toBe(5);
  });
});

describe("DisjointSetLength", () => {
  it("should correctly initialize a DisjointSetLength object", () => {
    const disjointSet = new DisjointSetLength(5);
    expect(disjointSet.length()).toBe(5);
  });

  it("should find the correct parent of a node", () => {
    const disjointSet = new DisjointSetLength(5);
    disjointSet.union(1, 2);
    disjointSet.union(3, 4);
    disjointSet.union(2, 3);
    expect(disjointSet.find(1)).toBe(1);
    expect(disjointSet.find(2)).toBe(1);
    expect(disjointSet.find(3)).toBe(1);
    expect(disjointSet.find(4)).toBe(1);
  });

  it("should check if two nodes are connected", () => {
    const disjointSet = new DisjointSetLength(5);
    disjointSet.union(1, 2);
    disjointSet.union(3, 4);
    disjointSet.union(2, 3);
    expect(disjointSet.isConnected(1, 4)).toBeTruthy();
    expect(disjointSet.isConnected(2, 3)).toBeTruthy();
    expect(disjointSet.isConnected(1, 3)).toBeTruthy();
    expect(() => disjointSet.isConnected(1, 5)).toThrow();
    expect(disjointSet.isConnected(0, 2)).toBeFalsy();
  });

  it("should correctly handle union operations", () => {
    const disjointSet = new DisjointSetLength(5);
    disjointSet.union(1, 2);
    disjointSet.union(3, 4);
    disjointSet.union(2, 3);
    expect(disjointSet.isConnected(1, 4)).toBeTruthy();
    expect(disjointSet.isConnected(2, 3)).toBeTruthy();
    disjointSet.union(1, 3);
    expect(disjointSet.isConnected(1, 4)).toBeTruthy();
    expect(disjointSet.isConnected(2, 3)).toBeTruthy();
  });

  it("should throw an error for out-of-bounds indices", () => {
    const disjointSet = new DisjointSetLength(5);
    expect(() => disjointSet.isNotOutOfBound(3, 4, 5)).toThrow(
      "Index out of bounds. The maximum index can be length-1"
    );
    expect(() => disjointSet.find(10)).toThrow(
      "Index out of bounds. The maximum index can be length-1"
    );
    expect(() => disjointSet.isConnected(0, 10)).toThrow(
      "Index out of bounds. The maximum index can be length-1"
    );
  });

  it("should correctly print the sets", () => {
    const disjointSet = new DisjointSetLength(5);
    disjointSet.union(1, 2);
    disjointSet.union(3, 4);
    disjointSet.union(2, 3);
    disjointSet.printSets(5); // This will log the sets to the console
  });
});
