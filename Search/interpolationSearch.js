/*Description // interpolation search

Here's how the algorithm works:

1- Initialize the variables low and high to the beginning and end of the array, respectively.
2- While low is less than or equal to high and the target value val is within the bounds of the array (val is greater than or equal to arr[low] and less than or equal to arr[high]), calculate the position pos of the target value using the formula pos = low + ((val - arr[low]) * (high - low)) / (arr[high] - arr[low]). This formula calculates the position using a weighted average based on the value of val.

3- If the value at pos matches the target value val, return pos.
4- If the value at pos is less than the target value val, update low to pos + 1.
5- If the value at pos is greater than the target value val, update high to pos - 1.
6- Repeat steps 2-5 until the target value is found or the search space is exhausted.
7- If the target value was not found, return -1.
*/

function interpolationSearch(arr, val) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && arr[low] <= val && val <= arr[high]) {
    const delta = ((val - arr[low]) * (high - low)) / (arr[high] - arr[low]);
    const pos = Math.floor(low + delta);

    if (arr[pos] === val) return pos;
    if (arr[pos] < val) low = pos + 1;
    else high = pos - 1;
  }
  return -1;
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const val1 = 7;
const val2 = 8;

console.log(interpolationSearch(arr, val1)); // Output: 3
console.log(interpolationSearch(arr, val2)); // Output: -1
