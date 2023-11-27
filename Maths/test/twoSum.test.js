import twoSum from "../twoSum";

describe("twoSum function", () => {
  // Test case 1: Basic test with two elements that sum up to the target
  it("should return the correct indices for two elements that sum up to the target", () => {
    const array = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(array, target);
    expect(result).toEqual([0, 1]);
  });

  // Test case 2: Test with negative numbers and zero
  it("should handle negative numbers and zero correctly", () => {
    const array = [2, -5, 3, 0, -7];
    const target = -5;
    const result = twoSum(array, target);
    expect(result).toEqual([0, 4]);
  });

  // Test case 3: Test with duplicate elements
  it("should return the correct indices for duplicate elements that sum up to the target", () => {
    const array = [3, 3];
    const target = 6;
    const result = twoSum(array, target);
    expect(result.length).toBe(2);
    expect(result).toEqual([1, 0]);
  });

  // Test case 4: Test with an array with no elements that sum up to the target
  it("should return an empty array when there are no elements that sum up to the target", () => {
    const array = [2, 7, 11, 15];
    const target = 3;
    const result = twoSum(array, target);
    expect(result.length).toBe(0);
    expect(result).toEqual([]);
  });

  // Test case 5: Test with an empty array
  it("should return an empty array for an empty array", () => {
    const array = [];
    const target = 9;
    const result = twoSum(array, target);
    expect(result).toEqual([]);
  });
  it("should test more complex array and return array with right value", () => {
    const array = [
      669, 882, -940, 629, 879, -430, 309, -585, 283, -927, 657, -60, 504, 560,
      841, 756, 765, -587, -118, 376, -674, 509, -608, -871, 676, -329, 197,
      -168, -627, 428, 449, 937, 86, -782, -297, 730, -683, 858, -718, -277,
      970, -632, -889, -335, -972, 151, 420, -772, -96, -638,
    ];

    const target = 459;
    const result = twoSum(array, target);
    expect(array[result[0]] + array[result[1]]).toBe(target);
    expect(result).toEqual([15, 34]);
  });
});
