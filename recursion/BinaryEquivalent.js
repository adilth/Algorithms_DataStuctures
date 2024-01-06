/**Description // Binary Equivalent
 * Problem Statement: Given a positive number `num`, find it's binary equivalent using recursion
 *
 * What is Binary Equivalent?
 * - In binary number system, a number is represented in terms of 0s and 1s,
@param {number} num
@returns {BinaryData}
*/

export default function binaryEquivalent(num) {
  if (num < 0) {
    // Handle negative numbers by returning their two's complement representation
    num = Math.pow(2, 32) + num; // Assuming 32-bit representation, adjust as needed
  }

  if (num === 0 || num === 1) return String(num);

  return binaryEquivalent(Math.floor(num / 2)) + String(num % 2);
}

console.log(binaryEquivalent(4)); //100
console.log(binaryEquivalent(5)); //101
console.log(binaryEquivalent(-5)); //1100
