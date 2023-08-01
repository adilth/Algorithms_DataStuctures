/**Description // min Partitions
 *A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.
 */

function minPartitions(s) {
  return Math.max(...s);
}
export default function generateDeciBinary(n) {
  const digits = n.toString().split("").map(Number);
  const maxDigit = Math.max(...digits);

  // Initialize deci-binary numbers array
  const deciBinaryNumbers = new Array(maxDigit).fill("0").map(() => []);

  // Fill the deci-binary numbers array
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    for (let j = 0; j < maxDigit; j++) {
      deciBinaryNumbers[j].push(j < digit ? "1" : "0");
    }
    console.log(deciBinaryNumbers);
  }

  // Convert deci-binary numbers to integers
  const result = deciBinaryNumbers.map((deciBinary) =>
    parseInt(deciBinary.join(""), 10)
  );

  return result;
}

console.log(minPartitions("32")); //3
let min = generateDeciBinary(82734);
console.log(min); //3
