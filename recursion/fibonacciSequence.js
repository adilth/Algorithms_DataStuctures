/*Description // Fibonacci Sequence
write a function "fib" that takes in a number n and returns the n-Th number in the fibonacci sequence
//first numbers in the fibonacci sequence are 1 and  1
*/

function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6)); //8
