/**Description //Odd Even Sort
 In this implementation, the function oddEvenSort takes an array arr as its input and returns the sorted array. The function works by performing an odd-even sort on the odd indices of the array, followed by an odd-even sort on the even indices of the array. This process is repeated until the array is sorted.

The time complexity of Odd-Even Sort is O(n^2) in the worst case, but its average-case performance is better than bubble sort due to its ability to handle partially sorted arrays efficiently.
 *@param {number[]} arr 
 *@param {number} i 
 *@param {number} j 
 */

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
/**
 * @param {Number[]} arr
 * @returns {Number[]}
 */
function oddEvenSort(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    //Odd Even Sort for odd indices
    for (let i = 1; i < arr.length - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        sorted = false;
      }
    }
    //Odd even Sort for odd indices
    for (let i = 0; i < arr.length - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        sorted = false;
      }
    }
  }
  return arr;
}

// Example usage
const arr = [5, 3, 8, 4, 2];
const arr2 = [
  1, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33,
  47, 4, 45, 39, 23, 2,
];
const sortedArr = oddEvenSort(arr);
console.log(sortedArr); // Output: [2, 3, 4, 5, 8]
console.log(oddEvenSort(arr2)); // Output: [
