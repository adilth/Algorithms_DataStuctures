/**Description // Product of Array Except Self

Given an array of integers, return an array of products such that products[i] is equal to product of all elements of arr except arr[i] solve without th division operation in O(n) time
@param {number[]} numbs
@returns {Number[]}
*/

function multiAllNumWithoutIndex(numbs) {
  /**@type {Number[]} */
  let products = [];
  let idxSoFar = 1;
  for (let i = 0; i < numbs.length; i++) {
    products[i] = idxSoFar;
    idxSoFar *= numbs[i];
  }
  let AfterIdxSoFar = 1;
  for (let j = numbs.length - 1; j > -1; j--) {
    products[j] = AfterIdxSoFar * products[j];
    AfterIdxSoFar *= numbs[j];
  }
  return products;
}

console.log(multiAllNumWithoutIndex([6, 4, 2, 3])); //[ 24, 36, 72, 48 ]
console.log(multiAllNumWithoutIndex([7, 2, 7, 5, 3, 9])); //[ 1890, 6615, 1890, 2646, 4410, 1470 ]
console.log(multiAllNumWithoutIndex([2, 11, 0, 5, 1])); //[ 0, 0, 110, 0, 0 ]
