/**description //generate  parentheses
 * Problem Statement: Given a number n pairs of parentheses, try to Generate all combinations of valid parentheses;
 * @param {number} n - number of given parentheses
 * @return {string[]} res - array that contains all valid parentheses
 */

function generateParentheses(n) {
  const res = [];
  const backtrace = (chars, openParentheses, closeParentheses) => {
    if (openParentheses === n && closeParentheses === n) {
      res.push(chars);
      return;
    }
    if (openParentheses <= n) {
      backtrace(chars + "(", openParentheses + 1, closeParentheses);
    }
    if (closeParentheses < openParentheses) {
      backtrace(chars + ")", openParentheses, closeParentheses + 1);
    }
  };
  backtrace("", 0, 0);
  return res;
}

console.log(generateParentheses(3)); //[ '((()))', '(()())', '(())()', '()(())', '()()()' ]
console.log(generateParentheses(2)); //[ '(())', '()()' ]
