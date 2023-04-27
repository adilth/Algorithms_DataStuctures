/**Description // circular arc
 * @function circularArcLength
 * @param {Integer} radius
 * @param {Integer} degrees
 * @description 1  calculate the length of a circular arc
 * @function circularArcArea
 * @description calculate the area of the sector formed by an arc
 * @param {Integer} radius
 * @param {Integer} degrees
 */

import { degreeToRadian } from "./degreeToRadian.js";

const circularArcLen = (radius, degree) => radius * degreeToRadian(degree);

console.log(circularArcLen(3, 45)); //= 2.356194490192345
const circularArcArea = (radius, degree) => {
  return Math.pow(radius, 2) * (degreeToRadian(degree) / 2);
};

console.log(circularArcArea(3, 45)); //3.5342917352885173
