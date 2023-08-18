/*Description //get bit */
/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */

export function getBit(number, bitPosition) {
  return (number >> bitPosition) & 1;
}

export function setBit(number, bitPosition) {
  return number | (1 << bitPosition);
}

console.log(getBit(10, 1)); //1
console.log(getBit(10, 4)); //0
console.log(getBit(64, 6)); //1
console.log(getBit(1, 1)); //0
console.log(getBit(15, 1)); //1
console.log(getBit(100, 0)); //0
console.log(setBit(10, 1)); //10
console.log(setBit(10, 4)); //26
console.log(setBit(64, 6)); //64
console.log(setBit(1, 1)); //3
console.log(setBit(15, 1)); //15
console.log(setBit(100, 0)); //101
