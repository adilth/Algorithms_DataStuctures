/**Description //prime factors
A prime factor is a natural number, other than 1, whose only factors are 1 and itself. The first few prime numbers are actually 2, 3, 5, 7, 11, and so on. Now we can also use what's called prime factorization for numbers which actually consist of using factor trees.
*@param {number} n
*@returns {number[]} primeFactors: Array of all prime factors of n
*/

function primeFactors(n) {
  let primeFac = [];
  for (let i = 2; i * i <= n; i++) {
    while (n % i == 0) {
      primeFac.push(i);
      n = Math.floor(n / i);
    }
  }
  if (n > 0) primeFac.push(n);
  return primeFac;
}

console.log(primeFactors(10)); //[ 2, 5 ]
console.log(primeFactors(100)); //[ 2, 2, 5, 5, 1 ]
console.log(primeFactors(120)); //[ 2, 2, 2, 3, 5 ]
