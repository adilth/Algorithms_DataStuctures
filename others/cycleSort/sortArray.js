/**Description // Sort Array

Given an array of scrambled numbers from 1…n, write a function to sort the numbers in place in O(n) time without using any extra space. 
this function work only if the number not duplicated
 * @param {number[]} list An array of numbers to be sorted. 
 * @return {number[]} An array of numbers sorted in increasing order.
*/

function sortArray(arr) {
  let i = 0;

  while (i < arr.length) {
    const toSort = arr[i];
    const newSpot = toSort - 1;
    //check if already sorted if not swap them
    // console.log(toSort);
    if (toSort == undefined || arr[newSpot] == undefined) {
      i;
    } else if (toSort !== arr[newSpot]) {
      const swapWith = arr[newSpot];
      arr[newSpot] = toSort;
      arr[i] = swapWith;
    } else {
      i++;
    }
  }
  return arr;
}

console.log(sortArray([12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]));
console.log(sortArray([12, 11, 15, 10, 9, 1, 13, 14, 16, 3, 6, 7, 8]));
