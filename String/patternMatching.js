/*description // pattern matching

*/

function patternMatching(text, pattern) {
  if (typeof text !== "string" || typeof pattern !== "string") {
    return "Given input is not a string";
  }
  const textLen = text.length; // Store the length of the text in a variable
  const patternLen = pattern.length; // Store the length of the pattern in a variable

  for (let i = 0; i <= textLen - patternLen; i++) {
    for (let j = 0; j < patternLen; j++) {
      if (text[i + j] !== pattern[j]) break;
      if (j + 1 === patternLen) {
        return `the pattern found at ${i} `;
      }
    }
  }
  return "not found";
}

console.log(patternMatching("AAASSDDEFFGTR", "FGT")); //the pattern found at 9
console.log(patternMatching("FDETFGRWDG", "EREW")); //not found
console.log(patternMatching("LKIFITJGU", "IFI//")); //the pattern found at 2
console.log(patternMatching(1234, "234")); //Given input is not a string
