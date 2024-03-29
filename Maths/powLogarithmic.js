/**Description // pow logarithmic 

 * @param {Integer} x - The input integer
 * @param {Integer} n - The input integer
 * @return {Integer} - Returns x^n.
 * */

export default function powLog(x, n) {
  if (n == 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  const result = powLog(x, Math.floor(n / 2));
  if (n % 2 == 0) return result * result;

  return result * result * x;
}

console.log(powLog(7, -4)); //2401
console.log(powLog(6, 2)); //36
