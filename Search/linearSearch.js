/**Description // linear Search
 * Linear search or sequential search is a method for finding a target
 * value within a list. It sequentially checks each element of the list
 * for the target value until a match is found or until all the elements
 * have been searched.
@param {number[]} arr
@param {number} target
@returns {number } 
*/

export function linearSearch(arr, target) {
  let pos = search(arr, target);
  if (pos !== -1) {
    return pos + 1;
  } else {
    return -1;
  }
}

function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

const ar = [7, 9, 54, 67, 77, 88, 76];
console.log(linearSearch(ar, 7)); //3
console.log(linearSearch(ar, 4)); //-1
