/**Description // cocktail shaker sort 
 Cocktail Shaker Sort is an algorithm that is a Bidirectional Bubble Sort.
  * The algorithm extends bubble sort by operating in two directions.
 * While it improves on bubble sort by more quickly moving items to the beginning of the list, it provides only marginal
 * performance improvements.
The time complexity of Cocktail Shaker Sort is also O(n^2) in the worst case, but it can be faster than Cocktail Sort in some cases because it can help to eliminate turtles and rabbits early in the sorting process.
*/

/**
 *
 * @param {number[]} arr
 * @returns
 */

export function cocktailShakerSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j;
    //backwards
    for (j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    //forward
    for (j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Example usage
const arr = [5, 3, 8, 4, 2, 7, 1];
const sortedArr = cocktailShakerSort(arr);
console.log(sortedArr); // Output: [1,2, 3, 4, 5,7, 8]
