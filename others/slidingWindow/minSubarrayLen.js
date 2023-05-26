/**Description //Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 1 initialize windowStart and indow end at the 0th index 
 2 add value in window to windowSum 
 3 is value greater than ar equal to s 
  if yes:
   A: Caption length of window in minLength So far (if it is smaller then the current minLengthSofar )
   B: shrink sliding window by decrementing windowStart
   C: repeat from step 3
  if no:
   A: Grow sling window to next element by increment windowEnd 
   B: repeat from step 3
*/

function minSubArrayLen(arr, target) {
  let windowStart = 0;
  let winSum = 0;
  let minLen = Infinity;
  for (let i = 0; i < arr.length; i++) {
    //grow the window
    winSum += arr[i];
    //check it if greater then target if yes shrink the window
    while (winSum >= target) {
      let curLength = i - windowStart + 1;
      minLen = Math.min(minLen, curLength);
      winSum -= arr[windowStart];
      windowStart++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([1, 3, 2, 2, 4, 5], 6)); //2
console.log(minSubArrayLen([2, 5, 4, 1, 8, 6], 8)); //1
console.log(minSubArrayLen([3, 0, 3, 2, 4, 2], 7)); //3
