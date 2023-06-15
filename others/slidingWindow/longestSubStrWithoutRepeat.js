/**Description // longest subSting without repeat

Given a string s, find the length of the longest substring without repeating characters.
Example
 Input: s = "abcabcbb"
Output: 3
@param {String} str
@return {Number}
*/

function longestSubStrWithoutRepeat(str) {
  let winStart = 0;
  let max = 0;
  let visit = new Set();
  for (let winEnd = 0; winEnd < str.length; winEnd++) {
    let winChar = str[winEnd];

    while (visit.has(winChar)) {
      let winStartChar = str[winStart];
      visit.delete(winStartChar);
      winStart++;
    }
    visit.add(winChar);
    max = Math.max(max, winEnd - winStart + 1);
  }
  return max;
}

console.log(longestSubStrWithoutRepeat("absaabbsa")); //3
console.log(longestSubStrWithoutRepeat("ckecckeaaxk")); //4
