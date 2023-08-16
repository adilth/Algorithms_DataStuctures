import { getBit, setBit } from "../getAndSetBit";

describe("getBit", () => {
  it("should get the value of a bit at a given position", () => {
    expect(getBit(5, 0)).toBe(1); // 5 is 101 in binary
    expect(getBit(5, 1)).toBe(0);
    expect(getBit(5, 2)).toBe(1);
    expect(getBit(10, 0)).toBe(0); // 10 is 1010 in binary
    expect(getBit(10, 1)).toBe(1);
  });
});

describe("setBit", () => {
  it("should set the value of a bit at a given position", () => {
    expect(setBit(5, 0)).toBe(5); // 5 is 101 in binary
    expect(setBit(5, 1)).toBe(7); // Set the second bit to 1: 111
    expect(setBit(5, 2)).toBe(5);
    expect(setBit(10, 0)).toBe(11); // 10 is 1010 in binary
    expect(setBit(10, 1)).toBe(10);
  });
});
