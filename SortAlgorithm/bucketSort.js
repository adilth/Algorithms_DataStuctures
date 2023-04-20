/*Description // bucket sort
In this implementation, the function bucketSort takes an array arr and an optional parameter bucketSize as its input and returns the sorted array. The function works by dividing the input array into a number of smaller "buckets" and then sorting each bucket using an auxiliary sorting algorithm (in this case, we're using insertion sort). Finally, we concatenate the sorted buckets to create the fully sorted array.

The time complexity of Bucket Sort is O(n+k), where n is the size of the input array and k is the number of buckets. If we choose the bucket size carefully, we can achieve close to linear time complexity, making it an efficient algorithm for large input sizes.

*/

import { insertionSort } from "./insertionSort.js";

function bucketSort(arr, size = 5) {
  if (!arr.length) return arr;
  const minVal = Math.min(...arr);
  const maxVal = Math.max(...arr);
  const bucketCount = Math.floor((maxVal - minVal) / size) + 1;
  const buckets = Array.from({ length: bucketCount }, () => []);
  for (let num of arr) {
    const bucketIdx = Math.floor((num - minVal) / size);
    buckets[bucketIdx].push(num);
  }
  const sortedArr = [];
  for (const num of buckets) {
    insertionSort(num);
    sortedArr.push(...num);
  }
  return sortedArr;
}

// Example usage
const arr = [5, 3, 8, 4, 2];
const unsortedArr = [
  31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37,
  7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50,
  46, 25, 18, 33, 47, 4, 45, 39, 23, 2,
];

const sortedArr = bucketSort(arr);
console.log(sortedArr); // Output: [2, 3, 4, 5, 8]
console.log(bucketSort(unsortedArr)); // Output: [2, 3, 4, 5, 8]
/*
[
   1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
  45, 46, 47, 48, 49, 50
]
*/
