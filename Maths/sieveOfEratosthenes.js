/**Description // sieve Of Eratosthenes algorithm
 * The algorithm operates on an array of numbers starting from 2 to the specified number n. Initially, it assumes all numbers in this range are prime. It starts with the first number (2) and marks all of its multiples as non-prime. The algorithm then moves to the next unmarked number (which will be 3), marks all of its multiples as non-prime, and continues this process until all numbers up to n have been checked.
 */
/**
 *
 * @param {number} n
 * @returns {number[]}
 */

export function sieveOfEratosthenes(n) {
  /**@type {boolean[]} primes */
  let primes = Array(n + 1).fill(true); // Assume all numbers in array are prime
  primes[0] = primes[1] = false; // Except for 0 and 1

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false; // Mark factors non-prime
      }
    }
  }

  return primes.reduce((acc, isPrime, index) => {
    if (isPrime) acc.push(index);
    return acc;
  }, []);
}

// Usage:
let n = 30;
let primeNumbers = sieveOfEratosthenes(n);
console.log(primeNumbers); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
