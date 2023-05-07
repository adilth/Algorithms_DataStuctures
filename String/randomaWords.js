/**description // generate random words 
generate a Random Words base in the given array character and either how long the words will be 

@param {String[]} chars
@param {number} long
@returns {String}
*/

function generateRandom(chars, long) {
  let words = [];
  for (let i = 0; i < long; i++) {
    let len = Math.ceil(Math.random() * 8);
    let word = "";
    for (let j = 0; j < len; j++) {
      let index = Math.floor(Math.random() * chars.length);
      if (!word.includes(chars[index]) && !sp) {
        word += chars[index];
      }
    }
    words.push(word);
    word = "";
  }
  return words.join(" ");
}

console.log(
  generateRandom(["a", "s", "d", "e", "r", "t", "n", "l", "i", "o", "u"], 19)
);
//
