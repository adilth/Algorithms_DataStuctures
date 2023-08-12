/**Description // factorial
factorial, in mathematics, the product of all positive integers less than or equal to a given positive integer and denoted by that integer and an exclamation point. Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial zero is defined as equal to 1.
@param {number} n
@return {number}
*/

export const factorial = (n) => {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative integers.");
  }
  let fact = 1;
  while (n !== 0) {
    fact *= n;
    n--;
  }
  return fact;
};

let Factorial = factorial(6);
console.log(Factorial); //720
