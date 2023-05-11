/**Description // min Cost climbing Stairs (different solutions)
@description You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
You can either start from the step with index 0, or the step with index 1.
Return the minimum cost to reach the top of the floor.
@param {Number[]} arr - Number of steps
@returns {number} total min cost
@example Input: cost = [10,15,20]
Output: 15
*/

function minCost(arr) {
  let one = arr[0];
  let two = arr[1];

  for (let i = 2; i < arr.length; i++) {
    let temp = arr[i] + Math.min(one, two);
    one = two;
    two = temp;
  }
  return Math.min(one, two);
}

console.log(minCost([10, 15, 30, 20])); //35
console.log(minCost([14, 42, 23, 12, 13])); //49
