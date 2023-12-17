import { combinations } from "../combination";

describe("combinations", () => {
  it("should return an array with an empty array for an empty input", () => {
    const arr = [];
    const result = combinations(arr);
    expect(result).toEqual([[]]);
  });

  it("should return all combinations for an array with distinct elements", () => {
    const arr = [1, 2, 3];
    const result = combinations(arr);
    expect(result).toEqual([
      [],
      [3],
      [2],
      [2, 3],
      [1],
      [1, 3],
      [1, 2],
      [1, 2, 3],
    ]);
  });

  it("should handle an array with duplicate elements", () => {
    const arr = [1, 1, 2];
    const result = combinations(arr);
    expect(result).toEqual([[], [2], [1], [1, 2]]);
  });

  it("should handle an array with a single element", () => {
    const arr = [42];
    const result = combinations(arr);
    expect(result).toEqual([[], [42]]);
  });

  it("should handle an array of strings", () => {
    const arr = ["apple", "banana", "cherry"];
    const result = combinations(arr);
    expect(result).toEqual([
      [],
      ["cherry"],
      ["banana"],
      ["banana", "cherry"],
      ["apple"],
      ["apple", "cherry"],
      ["apple", "banana"],
      ["apple", "banana", "cherry"],
    ]);
  });

  it("should handle large arrays", () => {
    const arr = Array.from({ length: 5 }, (_, i) => i + 1);
    const result = combinations(arr);
    expect(result).toEqual([
      [],
      [5],
      [4],
      [4, 5],
      [3],
      [3, 5],
      [3, 4],
      [3, 4, 5],
      [2],
      [2, 5],
      [2, 4],
      [2, 4, 5],
      [2, 3],
      [2, 3, 5],
      [2, 3, 4],
      [2, 3, 4, 5],
      [1],
      [1, 5],
      [1, 4],
      [1, 4, 5],
      [1, 3],
      [1, 3, 5],
      [1, 3, 4],
      [1, 3, 4, 5],
      [1, 2],
      [1, 2, 5],
      [1, 2, 4],
      [1, 2, 4, 5],
      [1, 2, 3],
      [1, 2, 3, 5],
      [1, 2, 3, 4],
      [1, 2, 3, 4, 5],
    ]);
  });
});
