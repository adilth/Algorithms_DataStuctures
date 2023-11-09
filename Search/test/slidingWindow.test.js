import { slidingWindowMaxSubarraySum } from "../slidingWindow";
describe("slidingWindowMaxSubarraySum", () => {
  it("should return the maximum sum for a given window size", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const num = 3;
    const result = slidingWindowMaxSubarraySum(arr, num);
    expect(result).toBe(15); // Maximum sum is 3 + 4 + 5
  });

  it("should return null for a window size larger than the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const num = 6;
    const result = slidingWindowMaxSubarraySum(arr, num);
    expect(result).toBe(null);
  });

  it("should handle negative numbers", () => {
    const arr = [-1, -2, -3, -4, -5];
    const num = 3;
    const result = slidingWindowMaxSubarraySum(arr, num);
    expect(result).toBe(-6); // Maximum sum is -2 + -3 + -1
  });

  it("should return the maximum sum when the array contains negative and positive numbers", () => {
    const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const num = 4;
    const result = slidingWindowMaxSubarraySum(arr, num);
    expect(result).toBe(6); // Maximum sum is 4 + (-1) + 2 + 1
  });

  it("should return the maximum sum when the array contains all negative numbers", () => {
    const arr = [-4, -2, -9, -1, -5];
    const num = 2;
    const result = slidingWindowMaxSubarraySum(arr, num);
    expect(result).toBe(-6); // Maximum sum is -4 + -2
  });
});
