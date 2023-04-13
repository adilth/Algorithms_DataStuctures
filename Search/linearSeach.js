/**Description // linear Search
 * Linear search or sequential search is a method for finding a target
 * value within a list. It sequentially checks each element of the list
 * for the target value until a match is found or until all the elements
 * have been searched.
@param {Array[]} arr
@param {number || string} target
@returns {number || string} 
*/

function linearSearch(arr, target) {
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

const ar = [1, 2, 3, 5, 6, 7, 8, 9];
console.log(linearSearch(ar, 3)); //3
console.log(linearSearch(ar, 4)); //-1
