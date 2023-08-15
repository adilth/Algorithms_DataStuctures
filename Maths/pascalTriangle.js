/**Description // pascal triangle
 * In mathematics, Pascal's triangle is a triangular array of the binomial coefficients.

The rows of Pascal's triangle are conventionally enumerated starting with row n = 0 at the top (the 0th row). The entries in each row are numbered from the left beginning with k = 0 and are usually staggered relative to the numbers in the adjacent rows. The triangle may be constructed in the following manner: In row 0 (the topmost row), there is a unique nonzero entry 1. Each entry of each subsequent row is constructed by adding the number above and to the left with the number above and to the right, treating blank entries as 0. For example, the initial number in the first (or any other) row is 1 (the sum of 0 and 1), whereas the numbers 1 and 3 in the third row are added to produce the number 4 in the fourth row.
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

export default function pascalTriangle(lineNum) {
  if (typeof lineNum !== "number") {
    throw new Error("Please specify a number");
  }
  let currentLine = [1];
  const currLineSize = lineNum + 1;
  for (let i = 1; i < currLineSize; i++) {
    currentLine[i] = (currentLine[i - 1] * (lineNum - i + 1)) / i;
  }
  return currentLine;
}

console.log(pascalTriangle(6)); //[1, 6, 15, 20,15, 6,  ]
console.log(pascalTriangle(4)); //[ 1, 4, 6, 4, 1 ]
