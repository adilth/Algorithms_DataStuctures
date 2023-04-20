/**Description // insertion sort
In this implementation, the function insertionSort takes an array arr as its input parameter and returns the sorted array. The function works by iterating through each element in the input array and inserting it into its correct position in a partially sorted array.

The time complexity of Insertion Sort is O(n^2), where n is the size of the input array. This makes it less efficient than more advanced sorting algorithms, but it can be faster than some algorithms for small input sizes or for partially sorted arrays.

*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numToInsert;
  }
  return arr;
}
// Example usage
const arr = [5, 3, 8, 4, 2];
const sortedArr = insertionSort(arr);
console.log(sortedArr); // Output: [2, 3, 4, 5, 8]

export { insertionSort };
