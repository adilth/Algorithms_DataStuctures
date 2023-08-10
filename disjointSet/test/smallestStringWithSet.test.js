import { DisjointSetLength } from "../disjointSet";
import smallestStringWithSwaps from "../smallestStringWithSwaps";

describe("smallestStringWithSwaps", () => {
  it("should return the correct smallest string with swaps", () => {
    const pairs1 = [
      [0, 3],
      [1, 2],
    ];
    expect(smallestStringWithSwaps("dcab", pairs1)).toBe("bacd");

    const pairs2 = [
      [0, 3],
      [1, 2],
      [0, 2],
    ];
    expect(smallestStringWithSwaps("dcab", pairs2)).toBe("abcd");

    const pairs3 = [
      [0, 1],
      [1, 2],
    ];
    expect(smallestStringWithSwaps("cba", pairs3)).toBe("abc");
  });

  it("should return the input string if no swaps are performed", () => {
    const pairs = [];
    expect(smallestStringWithSwaps("abcdef", pairs)).toBe("abcdef");
  });

  it("should handle empty string input", () => {
    const pairs = [];
    expect(smallestStringWithSwaps("", pairs)).toBe("");
  });

  it("should handle empty pairs array", () => {
    expect(smallestStringWithSwaps("abcd", [])).toBe("abcd");
  });

  it("should handle larger test cases", () => {
    const pairs = [
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
    ];
    const input = "abcdefgh";
    expect(smallestStringWithSwaps(input, pairs)).toBe("abcdefgh");
  });
});
