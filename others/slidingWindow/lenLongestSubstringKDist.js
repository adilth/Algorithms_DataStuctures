/**Description //longest substring  K distinct

* @param {String} arr
 * @param {number} k
 * @return {number}
*/

function longestSubStrWithKDistinct(str, k) {
  let windowStart = 0;
  let letterFreq = {};
  let longestFoFar = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let winCharEnd = str[windowEnd];

    !letterFreq[winCharEnd]
      ? (letterFreq[winCharEnd] = 1)
      : letterFreq[winCharEnd]++;

    //if we get to k we need to shrink
    while (Object.keys(letterFreq).length > k) {
      let winStartChar = str[windowStart];
      letterFreq[winStartChar]--;
      if (letterFreq[winStartChar] == 0) {
        delete letterFreq[winStartChar];
      }
      windowStart++;
    }
    //take correct amount of letters
    longestFoFar = Math.max(longestFoFar, windowEnd - windowStart + 1);
  }
  return longestFoFar;
}

console.log(longestSubStrWithKDistinct("accpbabec", 3)); //4
console.log(longestSubStrWithKDistinct("acaacdbeba", 4)); //7
