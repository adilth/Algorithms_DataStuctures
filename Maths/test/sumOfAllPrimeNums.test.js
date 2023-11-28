import { isPrime, sumOfPrimesInRange } from "../sumOfAllPrimeNums";

// Test cases for isPrime function
describe("isPrime function", () => {
  it("should return true for prime numbers", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(17)).toBe(true);
  });

  it("should return false for non-prime numbers", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(9)).toBe(false);
  });

  it("should handle edge cases", () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-7)).toBe(false);
  });
});

// Test cases for sumOfPrimesInRange function
describe("sumOfPrimesInRange function", () => {
  it("should return the correct sum of primes in the given range", () => {
    expect(sumOfPrimesInRange(1, 10)).toBe(17); // 2 + 3 + 5 + 7 = 17
    expect(sumOfPrimesInRange(10, 20)).toBe(60); // 11 + 13 + 17 + 19 = 60
  });

  it("should return 0 for a range with no prime numbers", () => {
    expect(sumOfPrimesInRange(14, 16)).toBe(0);
    expect(sumOfPrimesInRange(24, 28)).toBe(0);
  });

  it("should handle edge cases", () => {
    expect(sumOfPrimesInRange(0, 5)).toBe(10); // 2 + 3 + 5 = 10
    expect(sumOfPrimesInRange(-5, 5)).toBe(10); // 2 + 3 + 5 = 10
  });
  it("should handle cases for start greater than end", () => {
    expect(sumOfPrimesInRange(5, 0)).toBe(0); // 2 + 3 + 5 = 10
    expect(sumOfPrimesInRange(100, 100)).toBe(0); // 2 + 3 + 5 = 10
  });
});
