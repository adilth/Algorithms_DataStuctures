import { degreeToRadian } from "../degreeToRadian"; // Update with the correct import path

describe("degreeToRadian", () => {
  it("should convert degrees to radians", () => {
    expect(degreeToRadian(0)).toBe(0);
    expect(degreeToRadian(90)).toBe(Math.PI / 2);
    expect(degreeToRadian(180)).toBe(Math.PI);
    expect(degreeToRadian(270)).toBe((3 * Math.PI) / 2);
    expect(degreeToRadian(360)).toBe(2 * Math.PI);
  });

  it("should handle negative degrees", () => {
    expect(degreeToRadian(-90)).toBe(-(Math.PI / 2));
    expect(degreeToRadian(-180)).toBe(-Math.PI);
    expect(degreeToRadian(-270)).toBe(-((3 * Math.PI) / 2));
    expect(degreeToRadian(-360)).toBe(-2 * Math.PI);
  });
});
