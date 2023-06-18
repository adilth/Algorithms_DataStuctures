/*Description // radix sort
In this implementation, the function radixSort takes an array arr as its input parameter and returns the sorted array. The function works by sorting the input array based on each digit in the numbers.

The time complexity of Radix Sort is O(nk), where n is the size of the input array and k is the maximum number of digits in the input array. This makes it more efficient than some other sorting algorithms for large input sizes or for input arrays with a large range of values.
Here is a brief explanation of how the algorithm works:

1- Find the maximum number in the input array.
2- Iterate through each digit in the maximum number, from the least significant digit to the most significant digit.
3- For each digit, create 10 buckets (one for each digit from 0 to 9).
4- For each number in the input array, place it in the bucket corresponding to the current digit.
5- Concatenate all the buckets to create a new array, which is partially sorted based on the current digit.
6- Repeat steps 3-5 for each digit in the maximum number, from the least significant digit to the most significant digit.
7- The final concatenated array is the sorted array.

*/
function radixSort(arr) {
  let max = Math.max(...arr);
  let divisor = 1;
  for (let i = 0; i < max; i++) {
    const bucket = Array.from({ length: 10 }, () => []);
    for (let num of arr) {
      bucket[Math.floor(num / divisor) % 10].push(num);
    }
    arr = bucket.flat();
    divisor *= 10;
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

const sortedArr = radixSort(arr);
console.log(sortedArr); // Output: [2, 3, 4, 5, 8]
console.log(radixSort(arr2));
/*
[
   1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
  45, 46, 47, 48, 49, 50
]
*/
