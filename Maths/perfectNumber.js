/** description // perfect number
 * In number theory, a perfect number is a positive integer that is equal to the sum of
 * its positive divisors(factors), excluding the number itself.
 * For example: 6 ==> divisors[1, 2, 3, 6]
 *      Excluding 6, the sum(divisors) is 1 + 2 + 3 = 6
 *      So, 6 is a Perfect Number
 * Other examples of Perfect Numbers: 28, 486, ...
 */
/**
 *
 * @param {number} n
 * @returns {Number[]}
 */
export const factorsExcludingNumber = (n) => {
  if (n < 0) return [];
  return [...Array(n).keys()].filter((num) => n % num === 0);
};

/**
 *
 * @param {Number} n
 * @returns {Boolean}
 */
export const perfectNumber = (n) => {
  const factorSum = factorsExcludingNumber(n).reduce((num, initialVal) => {
    return num + initialVal;
  }, 0);

  return factorSum === n;
};

console.log(factorsExcludingNumber(0)); //true
console.log(perfectNumber(0)); //true
console.log(perfectNumber(-30)); //false
