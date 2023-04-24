/*Description // perfect cube
This uses `round` instead of `floor` or `trunc`, to guard against potential `cbrt` accuracy errors
*/

const perfectCube = (num) =>
  Number.isFinite(num) && Math.round(Math.cbrt(num)) ** 3 === num;

console.log(perfectCube(125)); //true
console.log(perfectCube(1200)); //false
