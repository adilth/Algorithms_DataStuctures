import isCamelCaseWithoutRegex, { isCamelCase } from "../checkCamelCase";

describe("isCamelCaseWithoutRegex", () => {
  it("should return true for valid CamelCase strings", () => {
    expect(isCamelCaseWithoutRegex("helloWorld")).toBeTruthy();
    expect(isCamelCaseWithoutRegex("thisIsCamelCase")).toBeTruthy();
    expect(isCamelCaseWithoutRegex("anotherExample")).toBeTruthy();
  });

  it("should return false for non-CamelCase strings", () => {
    expect(isCamelCaseWithoutRegex("NotCamelCase")).toBeFalsy();
    expect(isCamelCaseWithoutRegex("not_camel_case")).toBeFalsy();
    expect(isCamelCaseWithoutRegex("camelcase")).toBeFalsy();
  });

  it("should return false for empty strings", () => {
    expect(isCamelCaseWithoutRegex("")).toBeFalsy();
  });

  it("should return false for strings with only one character", () => {
    expect(isCamelCaseWithoutRegex("A")).toBeFalsy();
    expect(isCamelCaseWithoutRegex("a")).toBeFalsy();
  });

  it("should return false for strings with only non-alphabetic characters", () => {
    expect(isCamelCaseWithoutRegex("123")).toBeFalsy();
    expect(isCamelCaseWithoutRegex("!@#")).toBeFalsy();
    expect(isCamelCaseWithoutRegex("  ")).toBeFalsy();
  });
});
describe("isCamelCase", () => {
  it("should return true for valid CamelCase strings", () => {
    expect(isCamelCase("helloWorld")).toBeTruthy();
    expect(isCamelCase("thisIsCamelCase")).toBeTruthy();
    expect(isCamelCase("anotherExample")).toBeTruthy();
  });

  it("should return false for non-CamelCase strings", () => {
    expect(isCamelCase("NotCamelCase")).toBeFalsy();
    expect(isCamelCase("not_camel_case")).toBeFalsy();
    expect(isCamelCase("camelcase")).toBeFalsy();
  });

  it("should return false for empty strings", () => {
    expect(isCamelCase("")).toBeFalsy();
  });

  it("should return false for strings with only one character", () => {
    expect(isCamelCase("A")).toBeFalsy();
    expect(isCamelCase("a")).toBeFalsy();
  });

  it("should return false for strings with only non-alphabetic characters", () => {
    expect(isCamelCase("123")).toBeFalsy();
    expect(isCamelCase("!@#")).toBeFalsy();
    expect(isCamelCase("  ")).toBeFalsy();
  });
});
