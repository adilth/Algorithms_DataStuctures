/**Description //Cycle sort
Cycle Sort is an unstable comparison sort algorithm with poor performance. Cycle Sort uses the insertion method and performs at O(n2) in the best, average, and worst case.

*@param {number[]}list
*@return {number[]} 
*/

export function cycleSort(list) {
  // last item will already be in place
  for (let cycleStart = 0; cycleStart < list.length - 1; cycleStart++) {
    let item = list[cycleStart];

    // find where to put the item
    let pos = cycleStart;
    for (let i = cycleStart + 1; i < list.length; i++) {
      // TODO: comparison
      if (list[i] < item) pos++;
    }

    // if the item is already there, this is not a cycle
    if (pos == cycleStart) continue;

    // otherwise, put the item there or right after any duplicates
    // TODO: comparison
    while (item == list[pos]) {
      pos++;
    }
    const swap = list[pos];
    list[pos] = item; // TODO: Write
    item = swap;

    // rotate the rest of the cycle
    while (pos != cycleStart) {
      // find where to put the item
      pos = cycleStart;
      for (let i = cycleStart + 1; i < list.length; i++) {
        if (list[i] < item) pos++;
      }

      // put the item there or right after any duplicates
      while (item == list[pos]) {
        pos++;
      }
      const swap = list[pos];
      list[pos] = item;
      item = swap;
    }
  }
  return list;
}

console.log(cycleSort([12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]));
/*[
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
   13, 14, 15
]*/

console.log(cycleSort([2, 1, 5, 2, 9, 1, 2, 3, 3, 4, 4, 5, 6, 7, 8]));
/*[
  1, 1, 2, 2, 2, 3,
  3, 4, 4, 5, 5, 6,
  7, 8, 9
]*/
