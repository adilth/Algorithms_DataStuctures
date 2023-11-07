import { linearSearch } from "../linearSearch";

describe("linearSearch", () => {
  it("should find the target in the array", () => {
    const array = [1, 2, 3, 4, 5];
    const target = 3;
    expect(linearSearch(array, target)).toBe(3); // Index + 1
    expect(linearSearch(array, 5)).toBe(5); // Index + 1
  });
  it("should find the target in the array", () => {
    const array = [7, 9, 54, 67, 77, 88, 76];
    expect(linearSearch(array, 88)).toBe(6); // Index + 1
    expect(linearSearch(array, 7)).toBe(1); // Index + 1
  });

  it("should return -1 if the target is not in the array", () => {
    const array = [1, 2, 3, 4, 5];
    const target = 6;
    const result = linearSearch(array, target);
    expect(result).toBe(-1);
  });
});
