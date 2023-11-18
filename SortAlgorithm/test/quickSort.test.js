import { quickSort } from "../quickSort"; // Import your sorting function

describe("quickSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    const arr = [5, 3, 1, 4, 2];
    const sorted = quickSort(arr);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an empty array", () => {
    const arr = [];
    const sorted = quickSort(arr);
    expect(sorted).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    const arr = [42];
    const sorted = quickSort(arr);
    expect(sorted).toEqual([42]);
  });

  it("should sort an array of strings in alphabetical order", () => {
    const arr = ["banana", "apple", "cherry", "date"];
    const sorted = quickSort(arr);
    expect(sorted).toEqual(["apple", "banana", "cherry", "date"]);
  });

  it("should handle an array with duplicate elements", () => {
    const arr = [5, 2, 8, 2, 5];
    const sorted = quickSort(arr);
    expect(sorted).toEqual([2, 2, 5, 5, 8]);
  });

  it("should handle large arrays", () => {
    const arr = Array.from({ length: 1000 }, (_, i) => 1000 - i);
    const sorted = quickSort(arr);
    expect(sorted).toEqual(Array.from({ length: 1000 }, (_, i) => i + 1));
  });
  it("should handle arrays with negative numbers", () => {
    const arr = [-5, -2, -8, -1, -3];
    const sorted = quickSort(arr);
    expect(sorted).toEqual([-8, -5, -3, -2, -1]);
  });

  it("should handle arrays with decimals", () => {
    const arr = [3.14, 2.71, 1.618, 0.707];
    const sorted = quickSort(arr);
    expect(sorted).toEqual([0.707, 1.618, 2.71, 3.14]);
  });
});
