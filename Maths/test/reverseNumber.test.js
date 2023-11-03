import reverseNumber from "../reverseNumber";

describe("reverseNumber", () => {
  it("should reverse a positive number", () => {
    expect(reverseNumber(12345)).toBe(54321);
  });

  it("should reverse a negative number", () => {
    expect(reverseNumber(-9876)).toBe(-6789);
  });

  it("should handle a single-digit number", () => {
    expect(reverseNumber(5)).toBe(5);
  });

  it("should handle a zero", () => {
    expect(reverseNumber(0)).toBe(0);
  });

  it("should handle large numbers", () => {
    expect(reverseNumber(123456789)).toBe(987654321);
  });

  it("should handle the type check", () => {
    expect(() => reverseNumber("abc")).toThrowError(
      "Argument is not a number."
    );
  });
});
