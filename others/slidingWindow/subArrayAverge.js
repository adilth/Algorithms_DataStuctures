/**Description // subarray average
Given an array, find the average of all contiguous subarrays of size “K.”

* @param {number[]} arr
 * @param {number} k
 * @return {number[]} 
*/

function subArrayAverage(arr, k) {
  let startWindow = 0;
  let average = [];
  let windowSum = 0;
  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    if (i >= k - 1) {
      average.push(windowSum / k);
      //subtract the integer at start window  from window sum
      windowSum -= arr[startWindow];
      //move the start window one spot
      startWindow++;
    }
  }
  return average;
}

console.log(subArrayAverage([2, 5, 5, 8, 50, 2, 5], 3)); //[ 4, 6, 21, 20, 19 ]
console.log(subArrayAverage([1, 2, 3, 4, 5, 6], 3)); //[ 2, 3, 4, 5 ]
console.log(subArrayAverage([6, -2, 3, 1, 2, 6, 7, 9, 2], 4)); //[ 2, 1, 3, 4, 6, 6 ]
