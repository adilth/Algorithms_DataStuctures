import pascalTriangle from "../pascalTriangle";

describe("pascalTriangle", () => {
  it("should return the correct Pascal's triangle line for a given line number", () => {
    expect(pascalTriangle(0)).toEqual([1]);
    expect(pascalTriangle(1)).toEqual([1, 1]);
    expect(pascalTriangle(2)).toEqual([1, 2, 1]);
    expect(pascalTriangle(3)).toEqual([1, 3, 3, 1]);
    expect(pascalTriangle(4)).toEqual([1, 4, 6, 4, 1]);
    expect(pascalTriangle(5)).toEqual([1, 5, 10, 10, 5, 1]);
  });

  it("should throw an error if line number is not a number", () => {
    expect(() => pascalTriangle("abc")).toThrow("Please specify a number");
  });

  it("should throw an error if line number is not specified", () => {
    expect(() => pascalTriangle()).toThrow("Please specify a number");
  });
});
