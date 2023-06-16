/**Description // Gas Station
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
*/

function canTraverse(gas, cost, start) {
  let i = start;
  let started = false;
  let remaining = 0;
  while (start != i && !started) {
    started = true;
    remaining += gas[i] - cost[i];
    if (remaining < 0) {
      return false;
    }
    i = (i + 1) % gas.length;
  }
  return true;
}

// function canCompleteCircuit(gas, cost) {
//   for (let i = 0; i < gas.length; i++) {
//     if (canTraverse(gas, cost, i)) return i;
//   }
//   return -1;
// }

function canCompleteCircuit(gas, cost) {
  let remaining = 0;
  let startStation = 0;
  let prevRemaining = 0;
  for (let i = 0; i < gas.length; i++) {
    remaining += gas[i] - cost[i];
    if (remaining < 0) {
      startStation = i + 1;
      prevRemaining += remaining;
      remaining = 0;
    }
  }
  return remaining + prevRemaining < 0 ? -1 : startStation;
}
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); //3
