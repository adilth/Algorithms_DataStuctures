import countNumbersDivisible from "../countNumberDivisible";

describe("countNumbersDivisible", () => {
  it("should throw an error for invalid input types", () => {
    expect(() => countNumbersDivisible("10", 20, 2)).toThrowError(
      "Invalid input, please pass only numbers"
    );
  });

  it("should throw an error for num1 > num2", () => {
    expect(() => countNumbersDivisible(20, 10, 2)).toThrowError(
      "Invalid number range, please provide numbers such that num1 < num2"
    );
  });

  it("should return 0 if divider > num2", () => {
    expect(countNumbersDivisible(1, 10, 15)).toBe(0);
  });

  it("should return 1 for num1 = num2 and num1 is divisible", () => {
    expect(countNumbersDivisible(20, 20, 2)).toBe(1);
  });

  it("should return 0 for num1 = num2 and num1 is not divisible", () => {
    expect(countNumbersDivisible(21, 21, 2)).toBe(0);
  });

  it("should return the correct count for num1 = 1, num2 = 10, divider = 2", () => {
    expect(countNumbersDivisible(1, 10, 2)).toBe(5);
  });

  it("should return the correct count for num1 = 1, num2 = 100, divider = 7", () => {
    expect(countNumbersDivisible(1, 100, 7)).toBe(14);
  });

  it("should return the correct count for num1 = 5, num2 = 50, divider = 3", () => {
    expect(countNumbersDivisible(5, 50, 3)).toBe(15);
  });
});
