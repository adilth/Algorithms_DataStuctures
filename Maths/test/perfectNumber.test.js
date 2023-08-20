import { factorsExcludingNumber, perfectNumber } from "../perfectNumber";

describe("factorsExcludingNumber", () => {
  it("should return an empty array for 0", () => {
    expect(factorsExcludingNumber(0)).toEqual([]);
  });

  it("should return [1] for 1", () => {
    expect(factorsExcludingNumber(1)).toEqual([]);
  });

  it("should return [1, 2, 3, 6] for 6", () => {
    expect(factorsExcludingNumber(6)).toEqual([1, 2, 3]);
  });

  it("should return [1, 2, 3, 4, 6, 8, 12, 16, 24] for 24", () => {
    expect(factorsExcludingNumber(24)).toEqual([1, 2, 3, 4, 6, 8, 12]);
  });

  it("should return [1, 2, 4, 5, 10, 20, 25, 50, 100] for 100", () => {
    expect(factorsExcludingNumber(100)).toEqual([1, 2, 4, 5, 10, 20, 25, 50]);
  });
  it("should return [] for negative number", () => {
    expect(factorsExcludingNumber(-5)).toEqual([]);
  });
});

describe("perfectNumber", () => {
  it("should return false for 0", () => {
    expect(perfectNumber(0)).toBeTruthy();
  });

  it("should return false for 1", () => {
    expect(perfectNumber(1)).toBe(false);
  });

  it("should return false for 6", () => {
    expect(perfectNumber(6)).toBe(true);
  });

  it("should return false for 28", () => {
    expect(perfectNumber(28)).toBe(true);
  });

  it("should return false for 100", () => {
    expect(perfectNumber(100)).toBe(false);
  });
  it("should return false for negative number", () => {
    expect(perfectNumber(-5)).toBeFalsy();
    expect(perfectNumber(-13)).toBeFalsy();
    expect(perfectNumber(-8)).toBeFalsy();
  });
});
