/*Description // degree to radian
 * Angle in Radian = ( Angle in Degree ) x ( pi / 180 )
 *
 * Example :
 * Question : Convert 90 degree to radian
 * So, Angle in Degree = 90
 */

export const degreeToRadian = (degree) => degree * (Math.PI / 180);

console.log(degreeToRadian(90)); //1.5707963267948966
console.log(degreeToRadian(180)); //3.141592653589793
