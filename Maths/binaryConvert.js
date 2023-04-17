/*Description // binary convert 
convert number to binary format

*/

function binaryConvert(num) {
  let p = 1;
  let binary = 0;
  while (num) {
    const rem = num % 2;
    num = Math.floor(num / 2);
    binary = rem * p + binary;
    p *= 10;
  }
  return binary;
}

const binaryConvertStringWay = (n) =>
  n >= 0 ? n.toString(2) : (~n).toString(2);
console.log(binaryConvert(12)); //1100
console.log(binaryConvert(64)); //1000000
