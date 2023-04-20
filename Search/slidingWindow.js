/**   Description // sliding window
This is a JavaScript function that uses the sliding window algorithm to find the maximum sum of a subarray of length num within an array arr.

Here's how it works:

First, the function checks if the length of arr is less than num. If it is, the function returns null.
Next, the function initializes two variables: maxSum and tempSum to zero.
Then, a loop runs for the first num elements of the arr, adding each element to maxSum. This initializes maxSum to the sum of the first num elements of arr.
The tempSum variable is set to maxSum.
Another loop starts from index num of the arr, and for each iteration, it subtracts the first element of the previous subarray (i.e., arr[i - num]) and adds the current element of the subarray (i.e., arr[i]) to tempSum. This step implements the sliding window approach.
The maxSum variable is updated to be the maximum of the current maxSum and tempSum.
Once the loop ends, the maxSum is returned.
This function is useful when we want to find the maximum sum of a subarray of length num within an array. The sliding window approach provides an efficient way to solve such problems.
 * @param {number[]} arr - An array of integers on which we will perform the test.
 * @param {number} num - An integer that displays the size of the window you want to check.
 * @returns {number / Null} - Returns a total of N consecutive numbers or null
*/

function slidingWindowMaxSubarraySum(arr, num) {
  // Edge Case:
  // If the length of the array shorter than the window size (num) return null.
  if (arr.length < num) return null;
  // The max amount of consecutive numbers
  let maxSum = 0;
  // Temp amount of consecutive numbers - For comparative purposes
  let tempSum = 0;
  // loop over the array {num} times and save their total amount in {maxSum}
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // initialize {tempSum} to {maxSum}.
  tempSum = maxSum;
  // loop over the array n times
  for (let i = num; i < arr.length; i++) {
    // Add the next num in the array and remove the first one
    tempSum = tempSum - arr[i - num] + arr[i];
    // save the largest number between {maxNum} and {tempNum} in maxSum.
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// Examples:
console.log(slidingWindowMaxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // returns 10
console.log(slidingWindowMaxSubarraySum([1, 2, 5, 2, 8, 1, 5], 15)); // returns null
console.log(slidingWindowMaxSubarraySum([5, 2, 6, 9], 3)); // returns 17
