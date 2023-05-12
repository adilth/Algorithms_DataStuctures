/**Description // word break
 * @description Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
Note that the same word in the dictionary may be reused multiple times in the segmentation.
 * @param {string} str
 * @param {string[]} dict
 * @return {boolean}
 */

function wordBreak(str, dict) {
  /**@type {Boolean[]} dp */
  let dp = Array(str.length + 1).fill(false);
  dp[str.length] = true;
  for (let i = str.length; i >= 0; i--) {
    for (let w of dict) {
      if (i + w.length <= str.length && str.slice(i, i + w.length) == w) {
        dp[i] = dp[i + w.length];
      }
      if (dp[i]) break;
    }
  }
  return dp[0];
}

console.log(wordBreak("adil", ["ad", "il"]));
console.log(wordBreak("thekidplaying", ["the", "kid", "boy", "playing"]));
