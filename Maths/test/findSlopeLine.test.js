import { findSlopeLine } from "../findSlopeLine"; // Replace 'yourFileName' with the actual file name

describe("findSlopeLine", () => {
  test("calculates slope for a line with positive slope", () => {
    expect(findSlopeLine(1, 2, 3, 4)).toEqual(1);
  });

  test("calculates slope for a line with negative slope", () => {
    expect(findSlopeLine(5, 4, 2, 1)).toEqual(1);
  });

  test("calculates slope for a vertical line", () => {
    expect(findSlopeLine(2, 3, 2, 7)).toEqual(Number.MAX_VALUE);
  });

  test("calculates slope for a horizontal line", () => {
    expect(findSlopeLine(1, 2, 5, 2)).toEqual(0);
  });

  test("returns Number.MAX_VALUE for a vertical line with same x-coordinates", () => {
    expect(findSlopeLine(3, 2, 3, 7)).toEqual(Number.MAX_VALUE);
  });

  test("returns Number.MAX_VALUE for two identical points", () => {
    expect(findSlopeLine(2, 4, 2, 4)).toEqual(Number.MAX_VALUE);
  });
});
