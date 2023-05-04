/**Description //merge Sort 
In this implementation, the function `mergeSort` takes an array `arr` as its input parameter and returns the sorted array. The function works by dividing the array into two parts, sorting each part recursively using `mergeSort`, and then merging the two sorted parts using the `merge` function.

The `merge` function takes two sorted arrays `left` and `right` as its input parameters and returns a single sorted array that contains all the elements from both input arrays.

The time complexity of Merge Sort is O(n log n), which means that it takes a logarithmic amount of time to sort an array of size n. This makes it more efficient than Selection Sort, Bubble Sort, and Insertion Sort, but less efficient than Quick Sort and Heap Sort.
 /*** mergeSort  ***\
@param {number[]} n
@returns {number[]} sorted array
*/

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

/**
 * Sort and merge two given arrays.
 * @param {number[]} left SubList to break down.
 * @param {number[]} right SubList to break down.
 * @return {number[]} The merged list.
 */
function merge(left, right) {
  let result = [];
  let j = 0;
  let i = 0;
  while (j < right.length && i < left.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i), right.slice(j));
}
const arr = [5, 3, 8, 4, 2];
const arr2 = [34, 8, 1, 0, 9, 11, 20];
const sortedArr = mergeSort(arr); //[ 2, 3, 4, 5, 8 ]
console.log(sortedArr);
console.log(mergeSort(arr2)); //[  0,  1,  8, 9,  11, 20, 34]
