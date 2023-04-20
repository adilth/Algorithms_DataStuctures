/**Description // selection sort
Here is a brief explanation of how the algorithm works:

1- Divide the array into two parts: the sorted part and the unsorted part.
2-Find the smallest element in the unsorted part.
3-Swap the smallest element with the first element in the unsorted part, effectively moving it to the end of the sorted part.
4-Repeat steps 2 and 3 until the entire array is sorted.

The time complexity of Selection Sort is O(n^2), which means that it takes a quadratic amount of time to sort an array of size n. This makes it less efficient than Quick Sort, Merge Sort, and Heap Sort, but more efficient than Bubble Sort.
@param {number[]} arr
 @returns {number[]}
 @timeComplexity {O(n^2)}
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
  }
  return arr;
}

// Example usage
const arr = [5, 3, 8, 4, 2];
const arr2 = [15, 34, 0, 13, 24, 7, 100];
const sortedArr = selectionSort(arr);
console.log(sortedArr); // Output: [2, 3, 4, 5, 8]
console.log(selectionSort(arr2)); // Output: [  0,  7,  13, 15, 24, 34, 100]
