/***Description //sum all primes numbers
 *1. Finds all the prime numbers between 1 and 1000. 2. Sums all the prime numbers that you found between 1 and 1000. 3. The `main` function should return the sum of all prime numbers. Develop the solution entirely on this editor.
 */

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num <= 3) return true;

//   if (num % 2 === 0 || num % 3 === 0) return false;

//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) return false;
//   }

//   return true;
// }
//complexity is {O(sqrt(n)}
/**
 *
 * @param {number} num
 * @returns
 */
export function isPrime(num) {
  if (num < 1) return false;
  let sqrtNum = Math.floor(Math.sqrt(num));
  let prime = num != 1;
  for (let i = 2; i < sqrtNum + 1; i++) {
    // sqrtNum+1
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
/**
 *
 * @param {number} start
 * @param {number} end
 * @returns
 */
export function sumOfPrimesInRange(start, end) {
  let sum = [];
  if (start < 0) {
    start = 1;
  }
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      sum.push(i);
    }
  }

  return sum.reduce((acc, cu) => acc + cu, 0);
}

console.log(sumOfPrimesInRange(0, 5));
