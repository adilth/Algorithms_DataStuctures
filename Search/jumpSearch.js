/*Description // jump search 

Here's how the algorithm works:

1- Initialize the variables n (the length of the array), step (the size of the jump), prev (the previous position in the array), and curr (the current position in the array).
2- Jump through the array using a step size of step until the target value is found or passed. If the value at curr is less than the target value, set prev = curr and curr += step.
3- Linearly search the block of the array starting from prev until the target value is found or the end of the block is reached. If the value at prev matches the target value, return prev. Otherwise, increment prev by 1 and repeat the linear search until the end of the block is reached.
4- If the target value was not found, return -1.

Jump search has a time complexity of O(√n) and a space complexity of O(1), which makes it an efficient algorithm for searching large arrays. 

*/
/**
 *
 * @param {number} arr
 * @param {number} target
 * @param {number} n
 * @returns
 */
export function jumpSearch(arr, target, n = arr?.length) {
  let step = Math.floor(Math.sqrt(n));
  let prev = 0;
  let curr = step;
  // Jump through the array until the target value is found or passed

  while (arr[Math.min(curr, n) - 1] < target) {
    prev = curr;
    curr += step;
    if (prev >= n) return -1;
  }

  // Linearly search the block starting from the previous position
  while (arr[prev] < target) {
    prev++;

    // If we reached next block or end of
    // array, element is not present.
    if (prev == Math.min(curr, n)) return -1;
  }
  // If element is found
  if (arr[prev] == target) return prev;
  else return -1;
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const val1 = 11;
const largeArr = Array.from({ length: 10000 }, (_, i) => i);
console.log(jumpSearch(arr, 19)); // Output: 3
console.log(jumpSearch(largeArr, 100)); // Output: -1
