/**Description //Decoding Ransomware

A group of pesky haters has been plaguing Liz in her day job for some time now. They detonate ransomware on networks pretty regularly, which usually gets caught by the security engineers in time before they wreck havoc on her client’s networks. Their signature move is to leave a ransomware note with all the words reversed. 

She is tasked with writing a function to quickly decode their ransomware notes that can be run in place on the notes. 
,
*@param {String[]} letter 
*@param {Number} start start from 0
*@param {Number} end start from end of arr
*/

function reverseSwap(letter, start, end) {
  while (start < end) {
    [letter[start], letter[end]] = [letter[end], letter[start]];
    //  let tmp = letter[start];
    //  letter[start] = letter[end];
    //  letter[end] = tmp;
    start++;
    end--;
  }
}
/**
 *@param {String[]} message
 *@returns {String[]}
 */
function reverseWords(message) {
  reverseSwap(message, 0, message.length - 1);
  let wordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {
    if (message[i] == " " || i == message.length) {
      reverseSwap(message, wordStartIndex, i - 1);
      wordStartIndex = i + 1;
    }
  }
  return message;
}

console.log(
  reverseWords([
    "b",
    "a",
    "b",
    "y",
    " ",
    "y",
    "o",
    "u",
    " ",
    "l",
    "o",
    "v",
    "e",
    " ",
    "I",
  ]) //['I', ' ', 'l', 'o','v', 'e', ' ', 'y','o', 'u', ' ', 'b','a', 'b', 'y']
);
