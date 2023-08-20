// Import the functions to be tested
import binaryConvert, { binaryConvertStringWay } from "../binaryConvert"; // Replace 'your-file-name' with the actual file path

describe("binaryConvert function", () => {
  // Test case 1: Basic test with a positive number
  it("should convert a positive number to binary correctly", () => {
    const num = 42;
    const result = binaryConvert(num);
    expect(result).toBe(101010);
  });

  it("should convert a negative number to binary correctly", () => {
    const num = -12;
    const result = binaryConvert(num);
    expect(result).toBe(-1100);
  });

  // Test case 3: Test with zero
  it("should convert zero to binary correctly", () => {
    const num = 0;
    const result = binaryConvert(num);
    expect(result).toBe(0);
  });

  it("should convert a large positive number to binary correctly", () => {
    const num = 9007199254740991; // Maximum safe integer in JavaScript (2^53 - 1)
    const result = binaryConvert(num);
    expect(result).toBe(11111111111111111111111111111111111111111111111111111);
  });

  it("should convert a large negative number to binary correctly", () => {
    const num = -9007199254740991; // Maximum safe integer in JavaScript (2^53 - 1)
    const result = binaryConvert(num);
    expect(result).toBe(-11111111111111111111111111111111111111111111111111111);
  });
});

describe("binaryConvertStringWay function", () => {
  // Test case 6: Basic test with a positive number
  it("should convert a positive number to binary correctly using the string way", () => {
    const num = 42;
    const result = binaryConvertStringWay(num);
    expect(result).toBe("101010");
  });
  it("should convert a negative number to binary correctly using the string way", () => {
    const num = -12;
    const result = binaryConvertStringWay(num);
    expect(result).toBe("-1100");
  });

  // Test case 8: Test with zero
  it("should convert zero to binary correctly using the string way", () => {
    const num = 0;
    const result = binaryConvertStringWay(num);
    expect(result).toBe("0");
  });

  it("should convert a large positive number to binary correctly using the string way", () => {
    const num = 9007199254740991; // Maximum safe integer in JavaScript (2^53 - 1)
    const result = binaryConvertStringWay(num);
    expect(result).toBe(
      "11111111111111111111111111111111111111111111111111111"
    );
  });

  it("should convert a large negative number to binary correctly using the string way", () => {
    const num = -9007199254740991; // Maximum safe integer in JavaScript (2^53 - 1)
    const result = binaryConvertStringWay(num);
    expect(result).toBe(
      "-11111111111111111111111111111111111111111111111111111"
    );
  });
});
