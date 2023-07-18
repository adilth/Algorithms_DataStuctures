/**Description // binary convert 
convert number to binary format
@param {number} number
@returns number
*/

export default function binaryConvert(num) {
  let isNegative = num < 0;
  num = Math.abs(num);
  let p = 1;
  let binary = 0;
  while (num) {
    const rem = num % 2;
    num = Math.floor(num / 2);
    binary = rem * p + binary;
    p *= 10;
  }

  return isNegative ? -binary : binary;
}

export const binaryConvertStringWay = (n) =>
  n >= 0 ? n.toString(2) : `-${Math.abs(n).toString(2)}`;

console.log(binaryConvertStringWay(-9007199291));
