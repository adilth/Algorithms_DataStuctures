import firstUniqueChar from "../FirstUniqueCharacter";

describe("firstUniqueChar", () => {
  it("should return the index of unique character", () => {
    expect(firstUniqueChar("jordan banjos")).toBe(2);
    expect(firstUniqueChar("world word")).toBe(3);
    //  expect(firstUniqueChar("car")).toBe(-1); // No unique character
  });
  it("should return the index of the first unique character", () => {
    expect(firstUniqueChar("hello")).toBe(0);
    expect(firstUniqueChar("world")).toBe(0);
    expect(firstUniqueChar("aabbcc")).toBe(-1); // No unique character
  });

  it("should return 0 for strings with a single character", () => {
    expect(firstUniqueChar("a")).toBe(0);
    expect(firstUniqueChar("z")).toBe(0);
  });

  it("should return -1 for an empty string", () => {
    expect(firstUniqueChar("")).toBe(-1);
  });

  it("should throw a TypeError for non-string input", () => {
    expect(() => firstUniqueChar(null)).toThrow(TypeError);
    expect(() => firstUniqueChar(123)).toThrow(TypeError);
    expect(() => firstUniqueChar(undefined)).toThrow(TypeError);
  });
});
