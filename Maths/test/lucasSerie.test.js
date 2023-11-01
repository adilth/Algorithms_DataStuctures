import lucasSeries from "../lucasSerie";

describe("lucasSeries", () => {
  it("should return the correct Lucas number for a given index", () => {
    expect(lucasSeries(0)).toBe(2);
    expect(lucasSeries(1)).toBe(1);
    expect(lucasSeries(2)).toBe(3);
    expect(lucasSeries(3)).toBe(4);
    expect(lucasSeries(4)).toBe(7);
    expect(lucasSeries(5)).toBe(11);
    expect(lucasSeries(6)).toBe(18);
  });

  it("should throw an error for negative index", () => {
    expect(() => lucasSeries(-1)).toThrow(TypeError);
    expect(() => lucasSeries(-5)).toThrow(TypeError);
  });

  it("should return 2 for index 0", () => {
    expect(lucasSeries(0)).toBe(2);
  });
});
