import { circularArcLen, circularArcArea } from "../CircularArc";

describe("circularArcLen", () => {
  it("should calculate the length of a circular arc", () => {
    expect(circularArcLen(1, 0)).toBeCloseTo(0);
    expect(circularArcLen(1, 45)).toBeCloseTo(0.785398);
    expect(circularArcLen(2, 90)).toBeCloseTo(Math.PI);
    expect(circularArcLen(1, 90)).toBeCloseTo(Math.PI / 2);
    expect(circularArcLen(3, 180)).toBeCloseTo(Math.PI * 3);
    expect(circularArcLen(5, 270)).toBeCloseTo(Math.PI * 7.5);
    expect(circularArcLen(0, 120)).toBeCloseTo(0); // Zero radius
  });
});

describe("circularArcArea", () => {
  it("should calculate the area of a circular arc", () => {
    expect(circularArcArea(1, 0)).toBeCloseTo(0);
    expect(circularArcArea(1, 45)).toBeCloseTo(0.39269);
    expect(circularArcArea(2, 90)).toBeCloseTo(Math.PI);
    expect(circularArcArea(2, 180)).toBeCloseTo(Math.PI * 2);
    expect(circularArcArea(3, 180)).toBeCloseTo(Math.PI * 4.5);
    expect(circularArcArea(0, 120)).toBeCloseTo(0); // Zero radius
  });
});
