import exponentialFunction from "../exponentialFunction";

describe("exponentialFunction", () => {
  it("should calculate e^0 correctly", () => {
    expect(exponentialFunction(1, 0)).toBe(1);
  });

  it("should calculate e^1 correctly", () => {
    expect(exponentialFunction(1, 1)).toBeCloseTo(1);
  });

  it("should calculate e^2 correctly", () => {
    expect(exponentialFunction(1, 2)).toBeCloseTo(2);
  });

  it("should calculate e^3 correctly", () => {
    expect(exponentialFunction(1, 3)).toBeCloseTo(2.5);
  });

  it("should calculate the sum of powers correctly", () => {
    // 2^0 / 0! + 2^1 / 1! + 2^2 / 2! + 2^3 / 3! + ... + 2^10 / 10!
    // This is approximately equal to 7.38024...
    expect(+exponentialFunction(2, 10).toFixed(4)).toBeCloseTo(7.388);
  });

  it("should return 1 when n is 0, power doesn't matter", () => {
    expect(exponentialFunction(5, 0)).toBe(1);
  });

  it("should handle negative powers correctly", () => {
    expect(exponentialFunction(-2, 4)).toBeCloseTo(-0.35, 0);
  });

  it("should throw an error for negative n", () => {
    expect(() => exponentialFunction(2, -3)).toThrow(TypeError);
  });

  it("should throw an error for invalid inputs", () => {
    expect(() => exponentialFunction("a", 5)).toThrow(TypeError);
    expect(() => exponentialFunction(2, "b")).toThrow(TypeError);
  });
});
