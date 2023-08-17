/**Description // exponential Function
 *  Calculates the n+1 th order Taylor series approximation of exponential function e^x given n
 * @function exponentialFunction
 * @param {Number} power
 * @param {Number} n
 * @returns Number
 */

export default function exponentialFunction(power, n) {
  let output = 0;
  let fac = 1;
  if (isNaN(power) || isNaN(n) || n < 0) {
    throw new TypeError("Invalid Input");
  }
  if (n === 0) {
    return 1;
  }
  for (let i = 0; i < n; i++) {
    output += power ** i / fac;
    fac *= i + 1;
  }
  return output;
}
console.log(exponentialFunction(1, 2));
