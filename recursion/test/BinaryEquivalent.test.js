import binaryEquivalent from "../BinaryEquivalent";

describe("binaryEquivalent", () => {
  it('should return "0" for input 0', () => {
    expect(binaryEquivalent(0)).toBe("0");
  });

  it('should return "1" for input 1', () => {
    expect(binaryEquivalent(1)).toBe("1");
  });

  it("should return the binary equivalent for positive integers", () => {
    expect(binaryEquivalent(5)).toBe("101");
    expect(binaryEquivalent(10)).toBe("1010");
    expect(binaryEquivalent(15)).toBe("1111");
  });

  it("should return the binary equivalent for negative integers", () => {
    expect(binaryEquivalent(-5)).toBe("11111111111111111111111111111011"); // Two's complement for -5
    expect(binaryEquivalent(-10)).toBe("11111111111111111111111111110110"); // Two's complement for -10
  });
});
