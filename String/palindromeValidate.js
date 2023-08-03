/**Description // Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 * @param {string} s
 * @return {boolean}
 */

export default function ValidPalindrome(s) {
  if (typeof s !== "string") return false;
  let removeSpacial = s.toLocaleLowerCase().replace(/[^a-z0-9]/gi, "");
  return removeSpacial.split("").reverse().join("") === removeSpacial;
}

var str = "";
let s = "A man, a plan, a canal: Panama";
console.log(ValidPalindrome(str));
console.log(ValidPalindrome(s));
