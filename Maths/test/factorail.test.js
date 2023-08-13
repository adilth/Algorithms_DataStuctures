import { factorial } from "../factorial";
describe("factorial function", () => {
  it("should calculate the factorial of a positive integer correctly", () => {
    const n = 8;
    const result = factorial(n);
    expect(result).toBe(40320);
  });
  it("should calculate the factorial of a positive integer correctly", () => {
    const n = 5;
    const result = factorial(n);
    expect(result).toBe(120); // 5! = 5 * 4 * 3 * 2 * 1 = 120
  });

  // Test case 2: Factorial of zero
  it("should return 1 for the factorial of zero", () => {
    const n = 0;
    const result = factorial(n);
    expect(result).toBe(1); // 0! = 1
  });

  // Test case 3: Factorial of a negative integer
  it("should throw an error when trying to calculate the factorial of a negative integer", () => {
    const n = -5;
    expect(() => factorial(n)).toThrow(
      "Factorial is not defined for negative integers."
    );
  });
});
