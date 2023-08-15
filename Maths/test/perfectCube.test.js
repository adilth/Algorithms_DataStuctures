import { perfectCube } from "../perfectCube";

describe("perfectCube", () => {
  it("should return true for perfect cubes", () => {
    expect(perfectCube(1)).toBeTruthy();
    expect(perfectCube(8)).toBeTruthy();
    expect(perfectCube(27)).toBeTruthy();
    expect(perfectCube(64)).toBeTruthy();
    expect(perfectCube(125)).toBeTruthy();
    expect(perfectCube(1000)).toBeTruthy();
  });

  it("should return false for non-perfect cubes", () => {
    expect(perfectCube(2)).toBeFalsy();
    expect(perfectCube(7)).toBeFalsy();
    expect(perfectCube(26)).toBeFalsy();
    expect(perfectCube(63)).toBeFalsy();
    expect(perfectCube(124)).toBeFalsy();
    expect(perfectCube(999)).toBeFalsy();
  });

  it("should return false for non-numeric input", () => {
    expect(perfectCube("abc")).toBeFalsy();
    expect(perfectCube(null)).toBeFalsy();
    expect(perfectCube(undefined)).toBeFalsy();
  });
});
