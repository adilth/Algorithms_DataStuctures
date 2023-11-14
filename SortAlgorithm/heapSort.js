/**Description // heap sort
 * Build a max heap out of the array. A heap is a specialized tree like
 * data structure that satisfies the heap property. The heap property
 *The time complexity of Heap Sort is O(n log n), which means that it takes a logarithmic amount of time to sort an array of size n. This makes it more efficient than Bubble Sort and Selection Sort, but less efficient than Quick Sort and Merge Sort.
 @param {number[]} arr
 @returns {number[]}
 @timeComplexity {O(n log n)}
 * */

export function heapSort(arr) {
  // Build heap (rearrange array)
  for (let i = Math.floor(arr.length / 2) - 1; i > -1; i--) {
    heapify(arr, arr.length, i);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
  return arr;
}

function heapify(arr, len, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  // If left child is larger than root;
  if (left < len && arr[left] > arr[largest]) largest = left;
  if (right < len && arr[right] > arr[largest]) largest = right;
  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    // Recursively heapify the affected sub-tree
    heapify(arr, len, largest);
  }
}

const arr = [5, 3, 8, 4, 2];
const arr2 = [12, 6, 23, 0, 7, 5, 98];
const sortedArr = heapSort(arr);
console.log(sortedArr); // Output: [2, 3, 4, 5, 8]
console.log(heapSort(arr2)); // Output: [ 0,  5,  6, 7,12, 23, 98]
