/*Description: // exponential search 

1- Check if the first element of the array matches the target value val. If it does, return 0 (the index of the first element).
2- Set the variable i to 1.
3- While i is less than the length of the array and the value at index i is less than or equal to val, double the value of i.
4- Call the binarySearch function with the arguments arr, val, Math.floor(i / 2), and Math.min(i, arr.length - 1). The binarySearch function searches for the target value within the range of indices from Math.floor(i / 2) to Math.min(i, arr.length - 1) using a binary search algorithm.
5- If the target value is found in the array, return its index. Otherwise, return -1 to indicate that the value was not found.

Exponential search has a time complexity of O(log n) for finding the range of indices and O(log n) for performing the binary search, giving it a total time complexity of O(log n)

*/

import { binarySearch } from "./binarySearch.js";

function exponentialSearch(arr, val) {
  if (arr[0] === val) return 0;
  let i = 1;
  while (i < arr.length && arr[i] <= val) {
    i *= 2;
  }
  return binarySearch(arr, val, Math.floor(i / 2), Math.min(i, arr.length - 1));
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const val1 = 7;
const val2 = 8;

console.log(exponentialSearch(arr, val1)); // Output: 3
console.log(exponentialSearch(arr, val2)); // Output: -1
