/**Description // binary search 

Binary search is an efficient algorithm to search for a specific target value in a sorted array. The basic idea is to divide the array into halves until the target value is found or until there are no more elements left to search. Here's how it works:

1- Initialize two pointers, start and end, to the first and last indices of the array respectively.

2- Compute the middle index mid as the average of start and end.

3- Compare the target value with the value at the middle index arr[mid]. If they are equal, we have found the target value and we can return the index mid. If the target value is less than arr[mid], we can discard the second half of the array by setting end to mid-1. Otherwise, we can discard the first half of the array by setting start to mid+1.

4 -Repeat steps 2-3 until either the target value is found or start is greater than end, which means the target value is not in the array.
@param {number[]} arr
@param {number | string} target
@param {number} low
@param {number} high
@returns {number || string} 
*/

function binarySearchRec(arr, target, low = 0, high = arr?.length - 1) {
  let mid = Math.floor(low + (high - low) / 2);
  if (high >= low) {
    if (arr[mid] === target) return mid;
    if (target < arr[mid]) {
      return binarySearchRec(arr, target, low, high - 1);
    } else {
      return binarySearchRec(arr, target, low + 1, high);
    }
  } else {
    return -1;
  }
}

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1; // target not found
}

// Example usage:
const arr = [1, 3, 5, 7, 9];
const target = 5;
console.log(binarySearch(arr, target)); // Output: 2

console.log(binarySearch([2, 5, 6, 8, 11, 14, 34], 14)); //5

export { binarySearch };
