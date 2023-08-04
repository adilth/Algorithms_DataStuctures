import decode, { encode } from "../decodeString";

describe("encode and decode", () => {
  it("should correctly encode and decode a list of strings", () => {
    const strings = ["hello", "world", ""];
    const encodedString = encode(strings);
    expect(encodedString).toBe("5@hello#5@world#0@#");

    const decodedStrings = decode(encodedString);
    expect(decodedStrings).toEqual(strings);
  });

  it("should handle strings with special characters", () => {
    const strings = ["hello@world", "how are you?", "testing!!"];
    const encodedString = encode(strings);
    expect(encodedString).toBe("11@hello@world#12@how are you?#9@testing!!#");

    const decodedStrings = decode(encodedString);
    expect(decodedStrings).toEqual(strings);
  });

  it("should handle long strings", () => {
    const longString = "a".repeat(10000);
    const strings = [longString, longString, longString];
    const encodedString = encode(strings);

    // Each encoded string has the format 'length@string#', where length is the number of characters in the string.
    const expectedEncodedString = `${longString.length}@${longString}#${longString.length}@${longString}#${longString.length}@${longString}#`;
    expect(encodedString).toBe(expectedEncodedString);

    const decodedStrings = decode(encodedString);
    expect(decodedStrings).toEqual(strings);
  });

  it("should return an empty array for an invalid encoded string", () => {
    const invalidEncodedString = "5@hello#5@world#";
    const decodedStrings = decode(invalidEncodedString);
    expect(decodedStrings).toEqual(["hello", "world"]);
  });
  it("should return an empty array for an invalid input not a string", () => {
    const invalidEncodedString = 465378;
    const decodedStrings = decode(invalidEncodedString);
    expect(decodedStrings).toEqual([]);
  });
  it("should return an empty array for an invalid encoded string", () => {
    const invalidEncodedString = "5@hello#5@world";
    const decodedStrings = decode(invalidEncodedString);
    expect(decodedStrings).toEqual([]);
  });

  it("should return an empty array for an empty encoded string", () => {
    const emptyEncodedString = "";
    const decodedStrings = decode(emptyEncodedString);
    expect(decodedStrings).toEqual([]);
  });
});
