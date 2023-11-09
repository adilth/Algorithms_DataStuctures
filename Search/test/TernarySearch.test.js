import { ternarySearch } from "../TernarySearch";

describe("ternarySearch", () => {
  it("should return the index of the target element in a sorted array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 6;
    const result = ternarySearch(arr, target);
    expect(result).toBe(5); // Index of 6 in the array is 5
    expect(ternarySearch(arr, 1)).toBe(0); // Index of 6 in the array is 5
  });

  it("should return -1 when the target element is not in the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 10;
    const result = ternarySearch(arr, target);
    expect(result).toBe(-1); // 10 is not in the array
    expect(ternarySearch(arr, 0)).toBe(-1); // 10 is not in the array
  });

  it("should work for arrays with negative numbers", () => {
    const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
    const target = -3;
    const result = ternarySearch(arr, target);
    expect(result).toBe(2); // Index of -3 in the array is 2
  });

  it("should work for arrays with repeated elements", () => {
    const arr = [2, 4, 6, 6, 6, 6, 8, 10];
    const target = 6;
    const result = ternarySearch(arr, target);
    expect(result).toBe(2); // Index of 6 in the array is 3
  });

  it("should handle an empty array", () => {
    const arr = [];
    const target = 42;
    const result = ternarySearch(arr, target);
    const result1 = ternarySearch("arr", 2);
    expect(result).toBe(-1); // Array is empty
    expect(result1).toBe(-1); // Array is empty
  });
});
