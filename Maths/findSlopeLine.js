/**Description // finding the slope line
 * find the slope line with the given values
 * Input  : x1 = 4, y1 = 2, 
         x2 = 2, y2 = 5 
Output : Slope is -1.5
 */
/**
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns
 */

export function findSlopeLine(x1, y1, x2, y2) {
  if (x2 - x1 != 0) {
    return (y2 - y1) / (x2 - x1);
  }
  return Number.MAX_VALUE;
}

console.log(findSlopeLine(4, 2, 2, 5));
