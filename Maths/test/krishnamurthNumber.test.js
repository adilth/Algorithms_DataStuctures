import KrishnamurthyNumber from "../KrishnamurthyNumber.js";

describe("KrishnamurthyNumber function", () => {
  it("should correctly identify a Krishnamurthy number", () => {
    const num = 145;
    const result = KrishnamurthyNumber(num);
    expect(result).toBeTruthy;
  });

  it("should correctly identify a non-Krishnamurthy number", () => {
    const num = 123;
    const result = KrishnamurthyNumber(num);
    expect(result).toBeFalsy();
  });

  it("should correctly identify a single-digit Krishnamurthy number", () => {
    const num = 1;
    const result = KrishnamurthyNumber(num);
    expect(result).toBeTruthy();
  });

  it("should correctly identify a single-digit non-Krishnamurthy number", () => {
    const num = 3;
    const result = KrishnamurthyNumber(num);
    expect(result).toBeFalsy();
  });

  it("should return an error when trying to test a negative number", () => {
    const num = -145;
    const result = KrishnamurthyNumber(num);
    expect(result).toBeFalsy();
  });

  it("should return an error when the argument is not a number", () => {
    const num = "hello";
    const result = KrishnamurthyNumber(num);
    expect(result).toBeInstanceOf(TypeError);
    expect(result.message).toBe("Argument is not a number.");
  });
  it("should return an error when the argument is not a number", () => {
    const num = null;
    const result = KrishnamurthyNumber(num);
    expect(result).toBeInstanceOf(TypeError);
    expect(result.message).toBe("Argument is not a number.");
  });
  it("should return an error when the argument is not a number", () => {
    let num;
    const result = KrishnamurthyNumber(num);
    expect(result).toBeInstanceOf(TypeError);
    expect(result.message).toBe("Argument is not a number.");
  });
});
