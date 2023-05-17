/**Description // sum Min square
Write a function, summingSquares, that takes a target number as an argument. The function should return the minimum number of perfect squares that sum to the target. A perfect square is a number of the form (i*i) where i >= 1.

For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.

 *@param {number} n
 *@param {object = {}} memo 
 *@return {number}
*/

function summingSquares(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  let minSquare = Infinity;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    const square = i * i;
    minSquare = Math.min(minSquare, 1 + summingSquares(n - square, memo));
  }
  memo[n] = minSquare;
  return minSquare;
}

console.log(summingSquares(12)); // -> 3

console.log(summingSquares(31)); // -> 4

console.log(summingSquares(50)); // -> 2
