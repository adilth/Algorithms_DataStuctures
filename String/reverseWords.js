/**description // reverse word 
 * reverse word 
@param {String} word
@return {String}

*/

function reverseWord(str) {
  if (typeof str !== "string") {
    throw new TypeError("The given value is not a string");
  }
  let reverse = str
    .split(" ")
    .reduceRight((rev, word) => `${rev} ${word}`, "")
    .trim();

  return reverse;
}

console.log(reverseWord("the word is reversed")); //reversed is word the
console.log(reverseWord("nature be will this")); //this will be nature
console.log(reverseWord(12345)); //TypeError:The given value is not a string
