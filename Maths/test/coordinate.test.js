import { euclideanDistance, manhattanDistance } from "../coordinate";

describe("euclideanDistance", () => {
  it("should calculate the Euclidean distance between two points", () => {
    expect(euclideanDistance(0, 0, 0, 0)).toBeCloseTo(0);
    expect(euclideanDistance(0, 0, 3, 4)).toBeCloseTo(5);
    expect(euclideanDistance(-1, -2, 2, 1)).toBeCloseTo(4.24);
    expect(euclideanDistance(0, 0, 5, 12)).toBeCloseTo(13);
  });
  it("Should not give any output given non-numeric argument", () => {
    expect(euclideanDistance("fjdju", "123", "", null)).toBeNaN();
  });
  it("Should not give any output given any number of numeric arguments less than 4", () => {
    expect(euclideanDistance(2, 2, -10)).toBeNaN();
    expect(euclideanDistance(2, 2)).toBeNaN();
    expect(euclideanDistance(2)).toBeNaN();
    expect(euclideanDistance()).toBeNaN();
  });
});

describe("manhattanDistance", () => {
  it("should calculate the Manhattan distance between two points", () => {
    expect(manhattanDistance(0, 0, 0, 0)).toBe(0);
    expect(manhattanDistance(0, 0, 3, 4)).toBe(7);
    expect(manhattanDistance(-1, -2, 2, 1)).toBe(6);
    expect(manhattanDistance(0, 0, 5, 12)).toBe(17);
  });
  it("Should not give any output given non-numeric argument", () => {
    expect(euclideanDistance("ABC", 123, "", null)).toBeNaN();
  });
  it("Should not give any output given any number of numeric arguments less than 4", () => {
    expect(euclideanDistance(2, 2, -10)).toBeNaN();
    expect(euclideanDistance(2, 2)).toBeNaN();
    expect(euclideanDistance(2)).toBeNaN();
    expect(euclideanDistance()).toBeNaN();
  });
});
