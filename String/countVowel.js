/**description // count vowels
 *
 * @description Given a string of words or phrases, count the number of vowels.
 * @param {String} str - The input string
 * @return {Number} - The number of vowels
 * */

function countVowels(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input should be a string");
  }
  let vowels = ["a", "e", "i", "o", "u"];
  let char = str.split("").filter((e) => vowels.includes(e));
  return char.length;
}
/*
const countVowels = (str) => {
  if (typeof str !== "string") {
    throw new TypeError("Input should be a string");
  }

  const vowelRegex = /[aeiou]/gi;
  const vowelsArray = str.match(vowelRegex) || [];

  return vowelsArray.length;
};
*/
console.log(countVowels("me mari")); //3
console.log(countVowels("hw jhtrr ")); //0
console.log(countVowels("eeee")); //4
