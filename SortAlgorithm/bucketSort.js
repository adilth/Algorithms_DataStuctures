/*Description // bucket sort
In this implementation, the function bucketSort takes an array arr and an optional parameter bucketSize as its input and returns the sorted array. The function works by dividing the input array into a number of smaller "buckets" and then sorting each bucket using an auxiliary sorting algorithm (in this case, we're using insertion sort). Finally, we concatenate the sorted buckets to create the fully sorted array.

The time complexity of Bucket Sort is O(n+k), where n is the size of the input array and k is the number of buckets. If we choose the bucket size carefully, we can achieve close to linear time complexity, making it an efficient algorithm for large input sizes.

*/
import { insertionSort } from "./insertionSort.js";

/**
 * @type numStrArr number|string[]
 * @param {number } arr
 * @param {number} size
 * @returns {number [] | Error}
 */
export function bucketSort(arr, size = 5) {
  if (!Array.isArray(arr) || arr.some((num) => typeof num !== "number"))
    throw new Error("please enter valid data an array");
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
