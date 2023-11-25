/**Description // reverse number
ReverseNumber return the reversed value of the given number.
@param {Number} num
@returns {Number} reversed num if it greater than two digits
*/
export default function reverseNumber(num) {
  if (typeof num !== "number") {
    throw new Error("Argument is not a number.");
  }
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}

// console.log(reverseNumber("12")); //21
// console.log(reverseNumber("abc")); //21
console.log(reverseNumber(321)); //123
