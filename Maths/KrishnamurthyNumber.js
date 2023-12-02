/**Description //Krishnamurthy Number
 * krishnamurthy number is a number the sum of the factorial of the all dights is equal to the number itself.
 * @param {Number} number a number for checking is krishnamurthy number or not.
 * @returns return correspond boolean value, if the number is krishnamurthy number return `true` else return `false`.
 */

import { factorial } from "./factorial.js";
export default function KrishnamurthyNumber(num) {
  if (typeof num !== "number") {
    return new TypeError("Argument is not a number.");
  }

  let sum = 0;
  let newNum = num;

  while (newNum > 0) {
    const lastDigit = newNum % 10;
    sum += factorial(lastDigit);
    newNum = Math.floor(newNum / 10);
  }
  return sum === num;
}
