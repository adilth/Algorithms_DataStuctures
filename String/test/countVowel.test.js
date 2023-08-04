import countVowels from "../countVowel";

describe("countVowels", () => {
  it("should return the correct number of lowercase vowels", () => {
    expect(countVowels("hello")).toBe(2);
    expect(countVowels("world")).toBe(1);
    expect(countVowels("javascript")).toBe(3);
  });

  it("should return the correct number of uppercase vowels", () => {
    expect(countVowels("HELLO")).toBe(2);
    expect(countVowels("WORLD")).toBe(1);
    expect(countVowels("JAVASCRIPT")).toBe(3);
  });

  it("should return the correct number of mixed-case vowels", () => {
    expect(countVowels("Hello")).toBe(2);
    expect(countVowels("woRLd")).toBe(1);
    expect(countVowels("JavaScripT")).toBe(3);
  });

  it("should return 0 for strings without any vowels", () => {
    expect(countVowels("hmm")).toBe(0);
    expect(countVowels("xyz")).toBe(0);
    expect(countVowels("pqrst")).toBe(0);
  });

  it("should return 0 for an empty string", () => {
    expect(countVowels("")).toBe(0);
  });

  it("should throw a TypeError for non-string input", () => {
    expect(() => countVowels(null)).toThrow(TypeError);
    expect(() => countVowels(123)).toThrow(TypeError);
    expect(() => countVowels(undefined)).toThrow(TypeError);
  });
});
