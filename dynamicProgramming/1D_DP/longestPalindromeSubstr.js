/**Description // 1 )Longest Palindrome Substring 2) palindrome Substring 

@description Given a string s, return the longest palindromic substring in s.
 * @param {string} s
 * @return {string}
 * 
 * 2) palindromic substring
 * @descriptionGiven a string s, return the number of palindromic substrings in it.
A string is a palindrome when it reads the same backward as forward.
A substring is a contiguous sequence of characters within the string.
 *  @param {string} str
 * @return {number}
*/

function longestPalindromeSubstring(str) {
  let longStr = 0;
  let res = [];
  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > longStr) {
        longStr = right - left + 1;
        res = [left, right];
      }
      left--;
      right++;
    }
    return right - left - 1;
  };
  for (let i = 0; i < str.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }
  let [left, right] = res;
  return str.substring(left, right + 1);
}

console.log(longestPalindromeSubstring("racecar")); //racecar
console.log(longestPalindromeSubstring("babad")); //bab

// 2) palindrome substring
const expandAroundCenter = (str, left, right, count = 0) => {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    count++;
    left--;
    right++;
  }
  return count;
};

function palindromeSubString(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count += expandAroundCenter(str, i, i);
    count += expandAroundCenter(str, i, i + 1);
  }
  return count;
}

console.log(palindromeSubString("aaab")); //7
console.log(palindromeSubString("abab")); //6
