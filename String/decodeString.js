/**Description //decode and encode string
 * Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
 * Input: ["hell"”,”world”] Output: "5@he"lo5@world”
 * @param {String[]} strings
 * @returns {String}
 */

export function encode(strings) {
  //   if (!Array.isArray(strings) || strings.length !== 0) return "";
  let encodedString = "";
  for (let i = 0; i < strings.length; i++) {
    let currentString = strings[i];
    encodedString += currentString.length + "@" + currentString + "#";
  }
  return encodedString;
}
/**
 *
 * @param {String} encodedString
 * @returns {String[]}
 */
// Decodes a single string to a list of strings.
export default function decode(encodedString) {
  if (typeof encodedString !== "string") return [];
  if (
    !encodedString.includes("@") ||
    typeof Number(encodedString[0]) !== "number" ||
    !encodedString.includes("#") ||
    encodedString[encodedString.length - 1] !== "#"
  ) {
    return [];
  }

  let strings = [];
  let startIndex = 0;
  while (startIndex < encodedString.length) {
    let endIndex = encodedString.indexOf("@", startIndex);
    // console.log(endIndex);
    let stringLength = parseInt(encodedString.substring(startIndex, endIndex));
    // console.log(stringLength);
    let currentString = encodedString.substring(
      endIndex + 1,
      endIndex + 1 + stringLength
    );
    strings.push(currentString);
    startIndex = endIndex + 1 + stringLength + 1;
  }
  return strings;
}

let deco = encode(["hello@world", "how are you?", "testing!!"]);
console.log(deco);
console.log(decode("11@hello@world#12@how are you?#9@testing!!"));
let test = [];
let decoTest = encode(test);
console.log(decode(decoTest));
