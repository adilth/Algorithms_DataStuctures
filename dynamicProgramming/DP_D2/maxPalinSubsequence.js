/**Description // max palindrome SubSequence
Write a function, maxPalinSubsequence, that takes in a string as an argument. The function should return the length of the longest subsequence of the string that is also a palindrome.

A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.
 * @param {string} str
 * @return {number}
*/

function maxPalindromeSubSequence(str) {
  let memo = {};
  const dfs = (i, j) => {
    if (i === j) return 1;
    if (i > j) return 0;
    const key = `${i}-${j}`;
    if (memo[key]) return memo[key];
    if (str[i] === str[j]) {
      memo[key] = 2 + dfs(i + 1, j - 1);
    } else {
      memo[key] = Math.max(dfs(i + 1, j), dfs(i, j - 1));
    }
    return memo[key];
  };
  return dfs(0, str.length - 1);
}

console.log(maxPalindromeSubSequence("luwxult")); // -> 5

console.log(maxPalindromeSubSequence("xyzaxxzy")); // -> 6

console.log(maxPalindromeSubSequence("lol")); // -> 3
