import powLog from "../powLogarithmic";

describe("powLog", () => {
  it("should return 1 when n is 0", () => {
    expect(powLog(2, 0)).toBe(1);
    expect(powLog(5, 0)).toBe(1);
    expect(powLog(10, 0)).toBe(1);
  });

  it("should return the correct result for positive n", () => {
    expect(powLog(2, 3)).toBe(8);
    expect(powLog(3, 4)).toBe(81);
    expect(powLog(5, 2)).toBe(25);
  });

  it("should return the correct result for negative n", () => {
    expect(powLog(2, -3)).toBeCloseTo(0.125, 4);
    expect(powLog(3, -2)).toBeCloseTo(0.1111, 4);
    expect(powLog(5, -4)).toBeCloseTo(0.0016, 4);
  });
});
