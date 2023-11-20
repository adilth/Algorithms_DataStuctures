import { selectionSort } from "../selectionSort"; // Import your sorting function

describe("selectionSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    const arr = [543, 123, 876, 432, 789];
    const sorted = selectionSort(arr);
    expect(sorted).toEqual([123, 432, 543, 789, 876]);
  });

  it("should handle an empty array", () => {
    const arr = [];
    const sorted = selectionSort(arr);
    expect(sorted).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    const arr = [42];
    const sorted = selectionSort(arr);
    expect(sorted).toEqual([42]);
  });

  it("should sort an array of strings", () => {
    const arr = ["banana", "apple", "cherry", "date"];
    const sorted = selectionSort(arr);
    expect(sorted).toEqual(["apple", "banana", "cherry", "date"]);
  });

  it("should handle an array with duplicate elements", () => {
    const arr = [543, 123, 876, 123, 543];
    const sorted = selectionSort(arr);
    expect(sorted).toEqual([123, 123, 543, 543, 876]);
  });

  it("should handle large arrays", () => {
    const arr = Array.from({ length: 1000 }, (_, i) => 1000 - i);
    const sorted = selectionSort(arr);
    expect(sorted).toEqual(Array.from({ length: 1000 }, (_, i) => i + 1));
  });
  it("should handle arrays with negative numbers", () => {
    const arr = [-5, -2, -8, -1, -3];
    const sorted = selectionSort(arr);
    expect(sorted).toEqual([-8, -5, -3, -2, -1]);
  });

  it("should handle arrays with decimals", () => {
    const arr = [3.14, 2.71, 1.618, 0.707];
    const sorted = selectionSort(arr);
    expect(sorted).toEqual([0.707, 1.618, 2.71, 3.14]);
  });
});
