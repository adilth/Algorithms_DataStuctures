import jugglerSequence from "../jugglerSequence";

describe("jugglerSequence", () => {
  it("should return the correct sequence for a given number", () => {
    expect(jugglerSequence(5)).toEqual([5, 11, 36, 6, 2, 1]);
    expect(jugglerSequence(10)).toEqual([10, 3, 5, 11, 36, 6, 2, 1]);
    expect(jugglerSequence(1)).toEqual([1]);
    expect(jugglerSequence(2)).toEqual([2, 1]);
  });
  it("should return type error for provide a negative number", () => {
    expect(jugglerSequence(-10)).toBeInstanceOf(TypeError);
    expect(jugglerSequence(-10).message).toEqual(
      "please provide a positive number"
    );
    expect(jugglerSequence(-2).message).toEqual(
      "please provide a positive number"
    );
    expect(jugglerSequence(-1).message).toBe(
      "please provide a positive number"
    );
  });

  it("should handle non-numeric input", () => {
    expect(() => jugglerSequence("abc")).toThrowError("please provide number");
    expect(() => jugglerSequence(null)).toThrowError("please provide number");
    expect(() => jugglerSequence(undefined)).toThrowError(
      "please provide number"
    );
  });
});
