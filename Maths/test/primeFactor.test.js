import primeFactors from "../primeFactor";

describe("primeFactors", () => {
  it("should return an empty array when n is 1", () => {
    expect(primeFactors(1)).toEqual([]);
  });

  it("should return prime factors of n", () => {
    expect(primeFactors(2)).toEqual([2]);
    expect(primeFactors(10)).toEqual([2, 5]);
    expect(primeFactors(27)).toEqual([3, 3, 3]);
    expect(primeFactors(56)).toEqual([2, 2, 2, 7]);
    expect(primeFactors(100)).toEqual([2, 2, 5, 5]);
    expect(primeFactors(120)).toEqual([2, 2, 2, 3, 5]);
  });

  it("should handle large prime numbers", () => {
    expect(primeFactors(7919)).toEqual([7919]);
  });
});
