/** Description // Minimum Window SubString
find the minimum window sub string in the given string that matches the the target 

 * @param {string} str
 * @param {string} target
 * @return {string}
 */

function minimumWindowSubString(str, target) {
  if (target.length > str.length) return "";
  let letterFreq = {};

  for (let char of target) {
    letterFreq[char] = (letterFreq[char] || 0) + 1;
  }
  let left = 0;
  let right = 0;
  let min = "";
  let needLength = Object.keys(letterFreq).length;
  while (right < str.length) {
    let rightChar = str[right];
    letterFreq[rightChar]--;
    if (letterFreq[rightChar] == 0) needLength--;

    while (needLength === 0) {
      if (!min || min.length > right - left + 1) {
        min = str.slice(left, right + 1);
      }
      let startChar = str[left];
      if (letterFreq[startChar] === 0) needLength++;

      letterFreq[startChar]++;
      left++;
    }
    right++;
  }
  return min;
}
var minWindow = function (s, t) {
  // count t's frequency of its characters
  let map = {},
    uniqueChars = 0;
  for (let char of t) {
    if (char in map) {
      map[char] += 1;
    } else {
      map[char] = 1;
      uniqueChars += 1;
    }
  }

  let ans = "";
  let left = 0,
    match = 0;
  for (let right = 0; right < s.length; right++) {
    let rightChar = s[right];
    if (rightChar in map) {
      map[rightChar] -= 1;
      if (map[rightChar] === 0) match += 1;
    }

    if (match === uniqueChars) {
      // there is a solution
      // try to shrink the window from the left
      while (match === uniqueChars) {
        let leftChar = s[left++];
        if (map[leftChar] === 0) match -= 1;
        map[leftChar] += 1;
      }

      // record the solution, notice that you need to use left-1 instead of left when slicing
      let solution = s.slice(left - 1, right + 1);
      ans =
        ans === "" ? solution : ans.length > solution.length ? solution : ans;
    }
  }
  return ans;
};
console.log(minimumWindowSubString("ABCFBFCBADADCHABCREFG", "ABCA")); //CBADA
console.log(minWindow("ABCFBFCBADADCHABCREFG", "ABCA")); //CBADA
console.log(minWindow("yrtryetwehdgertrshrye", "yetw")); //yetw
