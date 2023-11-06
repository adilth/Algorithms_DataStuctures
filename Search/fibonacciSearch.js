/**Description // fibonacci search
Here's how the algorithm works:

1- Initialize the variables fib2, fib1, and fib to represent the (n-2)th, (n-1)th, and nth Fibonacci numbers, respectively.
2- Find the smallest Fibonacci number fib that is greater than or equal to the length of the array.
3- Initialize the offset offset to -1 and the current index i to Math.min(fib2 + offset, arr.length - 1).
4- Loop through the array using Fibonacci numbers until fib is 1:
  a. If the current value at index i is less than the target value, move the offset and Fibonacci numbers down by setting fib = fib1, fib1 = fib2, fib2 = fib - fib1, offset = i, and i = Math.min(fib2 + offset, arr.length - 1).
  b. If the current value at index i is greater than the target value, move the offset and Fibonacci numbers up by setting fib = fib2, fib1 = fib1 - fib2, fib2 = fib - fib1, and i = Math.min(fib2 + offset, arr.length - 1).
  c. If the current value at index i matches the target value, return i.
5- If the target value was not found, return -1.
Fibonacci search has a time complexity of O(log n) and a space complexity of O(1), which makes it an efficient algorithm for searching large arrays.

@param {number[]} arr
@param {number | string} target
@returns {number | -1} 
*/
export function fibonacciSearch(arr, target) {
  // Initialize Fibonacci numbers
  let fib2 = 0; // (n-2)th Fibonacci number
  let fib1 = 1; // (n-1)th Fibonacci number
  let fib = fib1 + fib2; // nth Fibonacci number
  // Find the smallest Fibonacci number greater than or equal to the length of the array
  while (fib < arr.length) {
    fib2 = fib1;
    fib1 = fib;
    fib = fib1 + fib2;
  }

  let offset = -1;
  let i = Math.min(fib2 + offset, arr.length - 1);

  // Loop through the array using Fibonacci numbers
  while (fib > 1) {
    // Check if the current value matches the target value
    if (i < 0 || arr[i] < target) {
      // If the current value is less than the target value, move the offset and Fibonacci numbers down
      fib = fib1;
      fib1 = fib2;
      fib2 = fib - fib1;
      offset = i;
      i = Math.min(fib2 + offset, arr.length - 1);
    } else if (arr[i] > target) {
      // If the current value is greater than the target value, move the offset and Fibonacci numbers up
      fib = fib2;
      fib1 = fib1 - fib2;
      fib2 = fib - fib1;
      i = Math.min(fib2 + offset, arr.length - 1);
    } else {
      // If the current value matches the target value, return its index
      return i;
    }
  }
  // If the target value was not found, return -1

  return arr[i] === target ? i : -1;
}

//Example;
const myArray = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const x = 90;
const fibFinder = fibonacciSearch(myArray, x);
console.log(fibFinder); //9
console.log(fibonacciSearch(myArray, 22)); //1
console.log(fibonacciSearch(myArray, 30)); //-1
