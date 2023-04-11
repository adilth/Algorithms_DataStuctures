/**Description //bubble sort
@param {number[]} arr
 @returns {number[]}
 @timeComplexity {O(n^2)}
*/

function bubbleSort(items) {
  let noSwap;
  for (let i = items.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (items[j] > items[j + 1]) {
        [items[j], items[j + 1]] = [items[j + 1], items[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return items;
}

/**
 * Using a while loop and a for loop.
 */

function bubbleSortWhile(items) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < items.length; i++) {
      if (items[i] > items[i + 1]) {
        [items[i], items[i + 1]] = [items[i + 1], items[i]];
        swapped = true;
      }
    }
  }
  return items;
}

const arr = [5, 3, 8, 4, 2];
const arr2 = [11, 43, 1, 0, 22, 9, 4];
const sortedArr = bubbleSort(arr);
const sortedArrW = bubbleSortWhile(arr);
console.log(sortedArr); // Output: [2, 3, 4, 5, 8]
console.log(sortedArrW); // Output: [2, 3, 4, 5, 8]
console.log(bubbleSort(arr2)); // output: [ 0,  1,  4, 9, 11, 22, 43]
