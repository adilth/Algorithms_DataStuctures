/*Description // perfect cube
This uses `round` instead of `floor` or `trunc`, to guard against potential `cbrt` accuracy errors

 the function perfectCube takes a number as an argument and returns true if the number is a perfect cube (i.e., the cube root of the number is an integer), and false otherwise.
*/

const perfectCube = (num) =>
  Number.isFinite(num) && Math.round(Math.cbrt(num)) ** 3 === num;

console.log(perfectCube(125)); //true
console.log(perfectCube(1200)); //false
