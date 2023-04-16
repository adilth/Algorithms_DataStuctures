/*Description //
find cycle in arr return true  if it exists or false
*/

function findCycle(arr) {
  for (let i = 0; i < arr.length; i++) {
    let slow = i;
    let fast = i;
    let isFord = arr[i] > 0;
    while (true) {
      slow = findIndex(arr, isFord, slow);
      fast = findIndex(arr, isFord, fast);
      fast = findIndex(arr, isFord, fast);
      if (slow === -1 || fast === -1 || fast === slow) break;
    }
    if (slow !== -1 && fast !== -1 && fast === slow) return true;
  }
  return false;
}

function findIndex(arr, isForward, pointerIdx) {
  const pointerIdxForward = arr[pointerIdx] > 0;
  if (pointerIdxForward !== isForward) return -1;

  let nextIdx = (pointerIdx + arr[pointerIdx]) % arr.length;
  if (nextIdx < 0) {
    nextIdx += arr.length;
  }

  if (nextIdx === pointerIdx) return -1;
  return nextIdx;
}

console.log(findCycle([-1, 1, 2, 2, 1, 2])); //true
console.log(findCycle([2, 2, -1, 2])); //true
console.log(findCycle([1, 4, 6, 7, 8, 5, 2])); //false
