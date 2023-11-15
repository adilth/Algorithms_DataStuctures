/**Description // quick sort
Quick sort is a comparison sorting algorithm that uses a divide and conquer strategy.
@param {number[]} items
 @returns {number[]}
 @timeComplexity {O(n log n)}
*/

export function quickSort(items) {
  if (items.length <= 1) return items;
  const pivot = items[0];
  const left = [];
  const right = [];
  for (let i = 1; i < items.length; i++) {
    if (items[i] < pivot) {
      left.push(items[i]);
    } else {
      right.push(items[i]);
    }
  }
  const sorted = [...quickSort(left), pivot, ...quickSort(right)];
  return sorted;
}

const arr = [5, 3, 8, 4, 2];
const arr2 = [12, 6, 7, 24, 2, 6, 10];
const sortedArr = quickSort(arr);
console.log(sortedArr); // Output: [2, 3, 4, 5, 8]
console.log(quickSort(arr2)); // Output: [2,  6,  6, 7,10, 12, 24]
