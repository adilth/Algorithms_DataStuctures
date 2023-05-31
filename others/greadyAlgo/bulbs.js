/*Description //bulbs
N light bulbs are connected by a wire.

Each bulb has a switch associated with it, however due to faulty wiring, a switch also changes the state of all the bulbs to the right of current bulb.

Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.
You can press the same switch multiple times.
Note : 0 represents the bulb is off and 1 represents the bulb is on.

Problem Constraints
0 <= N <= 5e5
0 <= A[i] <= 1

Input Format
The first and the only argument contains an integer array A, of size N.

Output Format
Return an integer representing the minimum number of switches required.
*/

function bulbs(a) {
  let cost = 0;
  for (let b of a) {
    if (cost % 2 == 0) b == b;
    else b = !b;

    if (b % 2 == 1) continue;
    else cost += 1;
  }
  return cost;
}

console.log(bulbs([1, 0, 1, 0])); //3
console.log(bulbs([1, 1, 1, 1])); //0
console.log(bulbs([0, 1, 0, 1, 1])); //4
