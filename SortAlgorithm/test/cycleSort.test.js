import { cycleSort } from "../cycleSort"; // Import your sorting function

describe("cycleSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    const arr = [5, 3, 1, 4, 2];
    const sorted = cycleSort(arr);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an empty array", () => {
    const arr = [];
    const sorted = cycleSort(arr);
    expect(sorted).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    const arr = [42];
    const sorted = cycleSort(arr);
    expect(sorted).toEqual([42]);
  });

  it("should handle an array that is already sorted", () => {
    const arr = [1, 2, 3, 4, 5];
    const sorted = cycleSort(arr);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an array of strings in alphabetical order", () => {
    const arr = ["banana", "apple", "cherry", "date"];
    const sorted = cycleSort(arr);
    expect(sorted).toEqual(["apple", "banana", "cherry", "date"]);
  });
});
