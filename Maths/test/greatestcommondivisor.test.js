import { gcd } from "../greatestcommondivisor"; // Replace 'yourFileName' with the actual file name

describe("gcd", () => {
  test("calculates gcd for positive numbers", () => {
    expect(gcd(12, 18)).toEqual(6);
  });

  test("calculates gcd for negative numbers", () => {
    expect(gcd(-15, 10)).toEqual(-5);
  });

  test("calculates gcd for one zero and a positive number", () => {
    expect(gcd(0, 8)).toEqual(8);
  });

  test("calculates gcd for two zeros", () => {
    expect(gcd(0, 0)).toEqual(0);
  });

  test("calculates gcd for a large number and a small number", () => {
    expect(gcd(123456789, 987654321)).toEqual(9);
  });

  test("calculates gcd for two identical numbers", () => {
    expect(gcd(7, 7)).toEqual(7);
  });
});
