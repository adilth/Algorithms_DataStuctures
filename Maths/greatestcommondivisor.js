/**Description // greatest common divisor The Euclidean algorithm
 *  implementing to find the greatest common divisor with euclidean algorithm
 * The Euclidean algorithm is a way to find the greatest common divisor of two positive integers. GCD of two numbers is the largest number that divides both of them. A simple way to find GCD is to factorize both numbers and multiply common prime factors.
 */

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns
 */
export function gcd(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;

  return gcd(b % a, a);
}
