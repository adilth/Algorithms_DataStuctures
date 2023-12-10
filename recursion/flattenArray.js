/**Description // flattens an array
 * you have an array with a nested arrays inside take this array and flatten it to be the i level of the array needed to return
 *
 * @param {number[]} arr
 * @returns {number}
 */
export function flatten(arr) {
  if (!Array.isArray(arr)) throw new TypeError("the input most be the array");
  let result = [];
  function flattenArray(arr, i) {
    if (i >= arr.length) {
      return;
    }
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i], 0);
    } else {
      result.push(arr[i]);
    }
    flattenArray(arr, i + 1);
  }
  flattenArray(arr, 0);
  return result;
}

var arr = [1, [2, [3, [4, 5], 6], 7]];

console.log(flatten(arr));
