/*Description // jump search 

Here's how the algorithm works:

1- Initialize the variables n (the length of the array), step (the size of the jump), prev (the previous position in the array), and curr (the current position in the array).
2- Jump through the array using a step size of step until the target value is found or passed. If the value at curr is less than the target value, set prev = curr and curr += step.
3- Linearly search the block of the array starting from prev until the target value is found or the end of the block is reached. If the value at prev matches the target value, return prev. Otherwise, increment prev by 1 and repeat the linear search until the end of the block is reached.
4- If the target value was not found, return -1.

Jump search has a time complexity of O(√n) and a space complexity of O(1), which makes it an efficient algorithm for searching large arrays. 

*/

function jumpSearch(arr, target, n = arr?.length) {
  let step = Math.floor(Math.sqrt(n));
  let prev = 0;
  let curr = step;
  // Jump through the array until the target value is found or passed

  while (curr < n && arr[curr] < target) {
    prev = curr;
    curr += step;
  }
  // Linearly search the block starting from the previous position
  while (prev < Math.min(curr, n)) {
    if (arr[prev] == target) return prev;
    prev++;
  }
  // If the target value was not found, return -1
  return -1;
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const val1 = 7;
const val2 = 8;

console.log(jumpSearch(arr, val1)); // Output: 3
console.log(jumpSearch(arr, val2)); // Output: -1
