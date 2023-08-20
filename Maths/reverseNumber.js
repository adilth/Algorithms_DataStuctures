/**Description // reverse number
ReverseNumber return the reversed value of the given number.
@param {Number} num
@returns {Number} reversed num if it greater than two digits
*/
export default function reverseNumber(num) {
  if (typeof num !== "number") {
    return new TypeError("Argument is not a number.");
  }
  let reverseNum = 0;
  while (num > 0) {
    const lastDigit = num % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return reverseNum;
}

console.log(reverseNumber(12)); //21
console.log(reverseNumber(321)); //123
