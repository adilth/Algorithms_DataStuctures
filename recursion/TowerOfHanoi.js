/**Description // Tower Of Hanoi
The Tower of Hanoi is a classic puzzle game where you have three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.

@param {number} n
@param {String} from
@param {String} to
@param {String} aux
@returns {[String]}
*/

function towerOfHanoi(n, from, to, aux, output = []) {
  if (n === 1) {
    output.push(`Move disk 1 from rod ${from} to rod ${to}`);
    return output;
  }
  towerOfHanoi(n - 1, from, to, aux, output);
  output.push(`Move disk ${n} from rod ${from} to rod ${to}`);
  towerOfHanoi(n - 1, from, to, aux, output);
  return output;
}

console.log(towerOfHanoi(4, "A", "C", "B"));
/*output
[
  "Move disk 1 from rod A to rod C",
  "Move disk 2 from rod A to rod C",
  "Move disk 1 from rod A to rod C",
  "Move disk 3 from rod A to rod C",
  "Move disk 1 from rod A to rod C",
  "Move disk 2 from rod A to rod C",
  "Move disk 1 from rod A to rod C",
];
*/
