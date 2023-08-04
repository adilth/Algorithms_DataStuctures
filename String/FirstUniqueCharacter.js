/**Description // first unique character
 * @description Given a string str, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * @param {String} str - The input string
 * @return {Number} - The index of first unique character.
 */

export default function firstUniqueChar(str) {
  if (typeof str !== "string") {
    throw new TypeError("Argument should be a string");
  }
  let map = new Map();

  for (const char of str) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (map[[str[i]]] === 1) return i;
  }
  return -1;
}

console.log(firstUniqueChar("jordan banjos")); //2
console.log(firstUniqueChar("i just checked my state")); //0
console.log(firstUniqueChar("jjajjja")); //-1
