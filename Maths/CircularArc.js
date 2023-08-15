/**Description // circular arc
 * @description 1  calculate the length of a circular arc
 * @function circularArcLength
 * @param {Integer} radius
 * @param {Integer} degrees
 */

import { degreeToRadian } from "./degreeToRadian.js";

export const circularArcLen = (radius, degree) =>
  radius * degreeToRadian(degree);

console.log(circularArcLen(5, 270)); //= 2.356194490192345
/**
 * @function circularArcArea
 * @description calculate the area of the sector formed by an arc
 * @param {Integer} radius
 * @param {Integer} degrees
 */
export const circularArcArea = (radius, degree) => {
  return Math.pow(radius, 2) * (degreeToRadian(degree) / 2);
};

console.log(circularArcArea(1, 45)); //3.5342917352885173
