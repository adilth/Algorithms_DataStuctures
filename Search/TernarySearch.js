/*Description // ternary Search
 Ternary search is similar to binary search but it divides the sorted array into three parts and determines which part the key lies in. The array will be divided into three intervals by using two middle points, mid1 and mid2.
 The value of the key will first be compared with the two mid points, the value will be returned if there is a match. Then, if the value of the key is less than mid1, narrow the interval to the first part. Else, if the value of the
 key is greater than mid2, narrow the interval to the third part. Otherwise,narrow the interval to the middle part. Repeat the steps until the value is found or the interval is empty (value not found after checking all elements).
*/

function ternarySearch(arr, key, low = 0, high = arr.length - 1) {
  if (high > low) {
    let mid1 = Math.floor(low + (high - low) / 3);
    let mid2 = Math.floor(high + (high - low) / 3);

    // check if key is found at any mid
    if (arr[mid1] === key) return mid1;
    if (arr[mid2] === key) return mid2;

    // since the key is not found at mid, check in which region it is present
    // and repeat the Search operation in that region
    if (key < arr[mid1]) {
      return ternarySearch(arr, key, low, high - 1);
    } else if (key > arr[mid2]) {
      return ternarySearch(arr, key, low + 1, high);
    } else {
      return ternarySearch(arr, key, low + 1, high - 1);
    }
  } else {
    // if low > high => we have searched the whole array without finding the item
    return -1;
  }
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const val1 = 7;
const val2 = 8;

console.log(ternarySearch(arr, val1)); // Output: 3
console.log(ternarySearch(arr, val2)); // Output: -1
