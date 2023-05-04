/**description // pattern matching
Pattern matching is case insensitive as the inputs are converted to lower case before thealgorithm is run.
The algorithm will run through the entire text and
return the starting index if the given pattern is available in the text
@param {String} text
@param {String} pattern
@returns {String} returns the string with an index or not found if the pattern doesn't exist
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
