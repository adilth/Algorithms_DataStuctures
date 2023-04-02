/** Description // largest rectangle in histogram
 *
 *Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
 *
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleInHistogram(heights) {
  if (heights === null || !heights.length) return 0;
  heights.push(0);
  let len = heights.length;
  let stack = [];
  let maxArea = 0;
  for (let i = 0; i < len; i++) {
    let heightsStart = i;
    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
      let [pos, height] = stack.pop();
      maxArea = Math.max(maxArea, (i - pos) * height);
      heightsStart = pos;
    }
    stack.push([heightsStart, heights[i]]);
  }
  return maxArea;
}

console.log(largestRectangleInHistogram([2, 1, 5, 6, 2, 3])); //10
