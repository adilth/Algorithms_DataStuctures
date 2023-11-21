/*Description // shell Sort
In this implementation, the function shellSort takes an array arr as its input and returns the sorted array. The function works by sorting subarrays of the input array, with each subarray being created by taking every gapth element, starting with the first element. The algorithm then applies insertion sort to each subarray to sort them individually, before reducing the gap and repeating the process until the entire array is sorted.

The time complexity of Shell Sort is dependent on the gap sequence used. A widely used gap sequence is the Knuth sequence, which has a time complexity of O(n^(3/2)). However, some other gap sequences can achieve better time complexity, such as the Sedgewick sequence with a time complexity of O(n^(4/3)).
Here is a brief explanation of how the algorithm works:

1- Define a gap sequence (e.g. Knuth sequence or Sedgewick sequence).
2- Iterate through the gap sequence, for each gap h:
  a. Iterate through the array, from the hth element to the end of the array.
  b. For each element, compare it to the elements h positions before it, and swap if necessary to maintain the order.
3- Repeat step 2 until the entire array is sorted.
*/

export function shellSort(arr) {
  let gap = Math.floor(arr.length / 2);

  while (gap > 0) {
    for (let i = 0; i < arr.length; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}

// Example usage
const arr = [5, 3, 8, 4, 2];
const arr2 = [
  31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37,
  7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50,
  46, 25, 18, 33, 47, 4, 45, 39, 23, 2,
];
const sortedArr = shellSort(arr);
console.log(sortedArr); // Output: [2, 3, 4, 5, 8]
console.log(shellSort(arr2)); /* Output: [
   1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
  45, 46, 47, 48, 49, 50
]
*/
