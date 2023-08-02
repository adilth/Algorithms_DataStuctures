/**Description // erase Overlap Intervals 
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
 * @param {number[][]} intervals
 * @return {number}
*/

export default function eraseIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let prev = intervals[0],
    remove = 0;
  for (let i = 1; i < intervals.length; i++) {
    const prevE = prev[1];
    const currStart = intervals[i][0];
    if (prevE <= currStart) prev = intervals[i];
    else remove++;
  }
  return remove;
}

console.log(
  eraseIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
); //2
console.log(
  eraseIntervals([
    [1, 4],
    [2, 3],
    [4, 6],
    [8, 9],
  ])
); //1
