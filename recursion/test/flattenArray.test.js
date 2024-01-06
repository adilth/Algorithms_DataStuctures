import { flatten } from "../flattenArray";

describe("flatten", () => {
  it("should return an empty array for an empty input", () => {
    const result = flatten([]);
    expect(result).toEqual([]);
  });

  it("should flatten a simple nested array", () => {
    const input = [1, [2, 3], 4];
    const result = flatten(input);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("should flatten a deeply nested array", () => {
    const input = [1, [2, [3, [4, 5], 6], 7]];
    const result = flatten(input);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("should handle arrays with different data types", () => {
    const input = [1, "hello", [true, [2.5, "world"], null], undefined];
    const result = flatten(input);
    expect(result).toEqual([1, "hello", true, 2.5, "world", null, undefined]);
  });

  it("should handle an already flat array", () => {
    const input = [1, 2, 3, 4];
    const result = flatten(input);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("should throw a TypeError for non-array input", () => {
    expect(() => flatten("invalid")).toThrow(TypeError);
    expect(() => flatten(42)).toThrow(TypeError);
    expect(() => flatten({ key: "value" })).toThrow(TypeError);
  });
});
