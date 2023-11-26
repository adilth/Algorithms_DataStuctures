import sumOfSequence from "../sumOfSequence";

describe("sumOfSequence", () => {
  it("should return the sum of numbers in a sequence", () => {
    expect(sumOfSequence(1, 5, 1)).toBe(15); // Sum of 1 + 2 + 3 + 4 + 5
    expect(sumOfSequence(2, 10, 2)).toBe(30); // Sum of 2 + 4 + 6 + 8 + 10
    expect(sumOfSequence(1, 100, 5)).toBe(970); // Sum of numbers with a step of 5
  });

  it("should return the start number if they equal to each others ", () => {
    expect(sumOfSequence(10, 10, 1)).toBe(10); // Start is greater than end
    expect(sumOfSequence(5, 5, 1)).toBe(5); // Start and end are the same
  });
  it("should return 0 if the start is greater than the end", () => {
    expect(sumOfSequence(10, 5, 1)).toBe(0); // Start is greater than end
    expect(sumOfSequence(7, 5, 1)).toBe(0); // Start and end are the same
  });

  it("should handle a step of 0", () => {
    expect(sumOfSequence(1, 5, 0)).toBe(0); // Step is 0
  });
});
