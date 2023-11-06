import { interpolationSearch } from "../interpolationSearch";

// Test cases
describe("interpolationSearch", () => {
  const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

  it("should return the index of the target value in the array", () => {
    expect(interpolationSearch(arr, 5)).toBe(2); // Value 5 is at index 2
    expect(interpolationSearch(arr, 15)).toBe(7); // Value 15 is at index 7
    expect(interpolationSearch(arr, 19)).toBe(9); // Value 19 is at the last index
  });

  it("should return -1 if the target value is not in the array", () => {
    expect(interpolationSearch(arr, 4)).toBe(-1); // Value 4 is not in the array
    expect(interpolationSearch(arr, 20)).toBe(-1); // Value 20 is greater than any value in the array
  });

  it("should handle empty arrays", () => {
    expect(interpolationSearch([], 5)).toBe(-1); // Empty array
  });

  it("should work with large arrays", () => {
    const largeArr = Array.from({ length: 10000 }, (_, i) => i);
    expect(interpolationSearch(largeArr, 5000)).toBe(5000); // Value 5000 is at index 5000
    expect(interpolationSearch(largeArr, 10000)).toBe(-1); // Value 10000 is not in the array
  });
});
