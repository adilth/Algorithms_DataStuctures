import armstrongNumber from "../armstrongNumber";

describe("armstrongNumber", () => {
  it("should return true for an Armstrong number", () => {
    expect(armstrongNumber(153)).toBe(true);
  });

  it("should return false for a non-Armstrong number", () => {
    expect(armstrongNumber(370)).toBe(true);
  });

  it("should return false for a negative number", () => {
    expect(armstrongNumber(-371)).toBe(false);
  });

  it("should handle a single-digit number", () => {
    expect(armstrongNumber(5)).toBe(true);
  });

  it("should handle a zero", () => {
    expect(armstrongNumber(0)).toBe(true);
  });

  it("should handle the type check", () => {
    expect(armstrongNumber("abc")).toBe(false);
  });
});
