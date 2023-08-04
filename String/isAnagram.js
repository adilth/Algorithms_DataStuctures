/**Description // is anagram
 *  @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//mutating the arguments
function isAnagramSort(s, t) {
  if (s.length != t.length) return false;

  return s.split("").sort().join("") === t.split("").sort().join("");
}
export default function isAnagram(s, t) {
  if (s.length != t.length) {
    return false;
  }

  let freq = new Array(26).fill(0);
  s = s.toLowerCase();
  t = t.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    freq[s.charAt(i).charCodeAt(0) - "a".charCodeAt(0)]++;
    freq[t.charAt(i).charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  return freq.every((index) => index === 0);
}

console.log(isAnagram("Nagaram", "anagram"));
