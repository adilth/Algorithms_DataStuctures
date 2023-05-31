/**Description // comb sort
In this implementation, the function combSort takes an array arr as its input and returns the sorted array. The function works by comparing elements that are gap indices apart, and swapping them if they are in the wrong order. The gap value starts at the length of the input array, and is repeatedly reduced by a shrinking factor until it reaches 1. This process is similar to that of bubble sort, but with larger gaps between the elements being compared in the early passes.

The time complexity of Comb Sort is O(n^2) in the worst case, but can be improved to O(n log n) by using a better shrinking factor. The best known shrinking factor is 1/1.3, which yields a time complexity of O(n log n).
 * @param {number[]} list The array of numbers to sort.
 * @return {number[]} The array of numbers sorted in increasing order.
 * */

function combSort(arr) {
  if (arr.length == 0) return arr;
  let shrink = 1.3;
  let sorted = false;
  let gap = arr.length;

  while (!sorted) {
    gap = Math.floor(gap / shrink);
    if (gap <= 1) {
      gap = 1;
      sorted = true;
    }
    let i = 0;
    while (i + gap < arr.length) {
      if (arr[i] > arr[i + gap]) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
        sorted = false;
      }
      i++;
    }
  }
  return arr;
}

// Example usage
const arr = [5, 3, 8, 4, 2];
const arr2 = [
  31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37,
  7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50,
  46, 25, 18, 33, 47, 4, 45, 39, 23, 2,
];
const sortedArr = combSort(arr);
console.log(sortedArr); // Output: [2, 3, 4, 5, 8]
console.log(combSort(arr2)); /* Output: [
   1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
  45, 46, 47, 48, 49, 50
]
*/
