/**Description // climbing Stairs (different solutions)
@description You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
@param {number} n - Number of steps
@returns {number} distinct ways can you climb to the top.
*/

function climbingStairs(n) {
  let climb = 1;
  let prev = 0;
  //   let temp;
  for (let i = 0; i < n; i++) {
    let temp = climb;
    climb += prev;
    prev = temp;
  }
  return climb;
}

function climbingStairsRec(n, memo = new Map()) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  if (memo.has(n)) return memo.get(n);
  return (memo[n] =
    climbingStairsRec(n - 1, memo) + climbingStairsRec(n - 2, memo));
}

console.log(climbingStairs(5)); //8
console.log(climbingStairsRec(7)); //21
