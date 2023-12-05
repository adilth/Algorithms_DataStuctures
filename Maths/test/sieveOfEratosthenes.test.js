import { sieveOfEratosthenes } from "../sieveOfEratosthenes";

describe("sieveOfEratosthenes", () => {
  test("returns an empty array for n less than 2", () => {
    expect(sieveOfEratosthenes(1)).toEqual([]);
  });

  test("returns primes up to 10", () => {
    expect(sieveOfEratosthenes(10)).toEqual([2, 3, 5, 7]);
  });

  test("returns primes up to 50", () => {
    expect(sieveOfEratosthenes(50)).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
    ]);
  });

  test("returns primes up to 100", () => {
    expect(sieveOfEratosthenes(100)).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ]);
  });

  // Add more test cases as needed
});
