/**Description //Missing Number (cycle Sort)

Given an array of scrambled numbers from 0…n, with one number missing. Write a function that finds the mission number in O(n) time without using any extra space. 
@param {number[]} arr
@return {number}
*/

function missingNumber(arr) {
  let i = 0;
  while (i < arr.length) {
    let newSpot = arr[i];
    if (newSpot !== i && newSpot < arr.length) {
      const toSwap = arr[newSpot];
      arr[newSpot] = newSpot;
      arr[i] = toSwap;
    } else {
      i++;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== j) {
      return j;
    }
  }
  return arr.length;
}

console.log(missingNumber([4, 3, 2, 0])); //1
console.log(missingNumber([4, 5, 3, 6, 1, 0])); //2
console.log(missingNumber([4, 5, 3, 1, 0, 2])); //6
