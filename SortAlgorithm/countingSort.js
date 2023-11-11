/**Description // counting sort

In this implementation, the function countingSort takes an array arr as its input parameter and returns the sorted array. The function works by counting the occurrences of each element in the input array, creating a cumulative sum of the counts, and then placing each element in its correct position in the output array.

The time complexity of Counting Sort is O(n + k), where n is the size of the input array and k is the range of the input values. This makes it very efficient for sorting arrays with a small range of values, but less efficient for arrays with a large range of values.

@param {number[]} arr2
@return {number[]}
*/

export function countingSort(arr, n = arr?.length) {
  if (!Array.isArray(arr) || arr.some((num) => typeof num !== "number"))
    throw new Error("please enter valid data an array");
  if (arr.length == 0) return [];
  let result = new Array(n).fill(0);
  let max = Math.max(...arr);
  let min;
  let count = new Array(max + 1).fill(0);
  for (let i = 0; i < n; i++) {
    min = arr[i];
    count[min]++;
  }
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }
  for (let i = n - 1; i >= 0; i--) {
    min = arr[i];
    result[count[min] - 1] = min;
    count[min]--;
  }
  return result;
}

const arr = [3, 0, 2, 5, 4, 1];
const arr2 = [3, 10, 12, 45, 14, 12];
console.log(countingSort(arr)); //[ 0, 1, 2, 3, 4, 5 ]
console.log(countingSort(arr2)); //[ 3, 10, 12, 12, 14, 45 ]
