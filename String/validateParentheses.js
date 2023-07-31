/**Description // validate parentheses
 * given a string s that contains just characters determine if the input string is valid
 * example:
 * "{()}" => true
 * "{(]))" => false
 * @param {String} s
 * @returns {Boolean}
 */

export default function validateParentheses(s) {
  if (s.length === 1 || s[0] === "]" || s[0] === ")" || s[0] === "}") {
    return false;
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      let prev = stack.pop();
      if (prev === "{" && s[i] !== "}") return false;
      if (prev === "[" && s[i] !== "]") return false;
      if (prev === "(" && s[i] !== ")") return false;
      if (prev === undefined && s[i]) return false;
    }
  }
  return stack.length === 0;
}

console.log(validateParentheses("([])"));
console.log(validateParentheses("{{)]]}}"));
console.log(validateParentheses("{{)]]}"));
console.log(validateParentheses("{{([])}}"));
