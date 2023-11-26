import radianToDegrees from "../radianToDegree";

describe("radianToDegrees", () => {
  it("should convert 0 radian to 0 degrees", () => {
    expect(radianToDegrees(0)).toBe(0);
  });

  it("should convert pi radian to 180 degrees", () => {
    expect(radianToDegrees(Math.PI)).toBe(180);
  });

  it("should convert 2 * pi radian to 360 degrees", () => {
    expect(radianToDegrees(2 * Math.PI)).toBe(360);
  });

  it("should convert -pi/4 radian to -45 degrees", () => {
    expect(radianToDegrees(-Math.PI / 4)).toBe(-45);
  });

  it("should convert pi/3 radian to 60 degrees", () => {
    expect(radianToDegrees(Math.PI / 3)).toBeCloseTo(60);
  });

  it("should handle negative radians", () => {
    expect(radianToDegrees(-Math.PI)).toBe(-180);
  });
});
