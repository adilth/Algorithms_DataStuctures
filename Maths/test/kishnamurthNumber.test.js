import KishnamurthyNumber from "../KishnamurthyNumber.js"; // Replace 'KishnamurthyNumber.js' with the correct path

describe("KishnamurthyNumber function", () => {
  it("should correctly identify a Kishnamurthy number", () => {
    const num = 145;
    const result = KishnamurthyNumber(num);
    expect(result).toBeTruthy;
  });

  it("should correctly identify a non-Kishnamurthy number", () => {
    const num = 123;
    const result = KishnamurthyNumber(num);
    expect(result).toBeFalsy();
  });

  it("should correctly identify a single-digit Kishnamurthy number", () => {
    const num = 1;
    const result = KishnamurthyNumber(num);
    expect(result).toBeTruthy();
  });

  it("should correctly identify a single-digit non-Kishnamurthy number", () => {
    const num = 3;
    const result = KishnamurthyNumber(num);
    expect(result).toBeFalsy();
  });

  it("should return an error when trying to test a negative number", () => {
    const num = -145;
    const result = KishnamurthyNumber(num);
    expect(result).toBeFalsy();
  });

  it("should return an error when the argument is not a number", () => {
    const num = "hello";
    const result = KishnamurthyNumber(num);
    expect(result).toBeInstanceOf(TypeError);
    expect(result.message).toBe("Argument is not a number.");
  });
  it("should return an error when the argument is not a number", () => {
    const num = null;
    const result = KishnamurthyNumber(num);
    expect(result).toBeInstanceOf(TypeError);
    expect(result.message).toBe("Argument is not a number.");
  });
  it("should return an error when the argument is not a number", () => {
    let num;
    const result = KishnamurthyNumber(num);
    expect(result).toBeInstanceOf(TypeError);
    expect(result.message).toBe("Argument is not a number.");
  });
});
