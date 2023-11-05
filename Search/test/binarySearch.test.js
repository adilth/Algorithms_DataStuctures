import { binarySearch } from "../binarySearch";

describe("binarySearch", () => {
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];

  it("should find the target in a sorted array", () => {
    expect(binarySearch(sortedArray, 7)).toBe(3); // 7 is at index 3
    expect(binarySearch(sortedArray, 1)).toBe(0); // 1 is at index 0
    expect(binarySearch(sortedArray, 15)).toBe(7); // 15 is at index 7
  });

  it("should return -1 for targets not in the array", () => {
    expect(binarySearch(sortedArray, 8)).toBe(-1); // 8 is not in the array
    expect(binarySearch(sortedArray, 0)).toBe(-1); // 0 is not in the array
    expect(binarySearch(sortedArray, 20)).toBe(-1); // 20 is not in the array
  });

  it("should handle empty arrays", () => {
    expect(binarySearch([], 5)).toBe(-1); // Array is empty
  });

  it("should handle single-element arrays", () => {
    expect(binarySearch([7], 7)).toBe(0); // Array contains only 7
    expect(binarySearch([42], 5)).toBe(-1); // Array contains only 42, not 5
  });

  it("should find the target in larger arrays", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    expect(binarySearch(largeArray, 500)).toBe(500);
    expect(binarySearch(largeArray, 999)).toBe(999);
  });
});
