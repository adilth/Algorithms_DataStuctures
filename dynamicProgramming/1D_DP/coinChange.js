/**Description //coin Change
* @description You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.

 * @params {Array} coins
 * @params {Number} amount
 *  @return {number}
*/

// Top-down (Memoization)
function coinChange(coins, amount) {
  let map = new Map();
  map.set(0, 1);
  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (let coin of coins) {
      if (i < coin) continue;
      min = Math.min(min, 1 + map.get(i - coin));
    }
    map.set(i, min);
  }
  return map.get(amount) === Infinity ? -1 : map.get(amount) - 1;
}

// Bottom-up (Tabulation)
function coinChangeBUP(coins, amount) {
  let comb = Array(amount + 1).fill(Infinity);
  comb[0] = 0;
  for (let i = 1; i < comb.length; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) comb[i] = Math.min(comb[i], comb[i - coin] + 1);
    }
  }
  return comb[amount] === Infinity ? -1 : comb[amount];
}
console.log(coinChange([1, 3, 4, 5], 7)); //2
console.log(coinChangeBUP([1, 3, 4, 5], 7)); //2
console.log(coinChangeBUP([4, 0, 6, 2, 5, 8], 25)); //4
console.log(coinChangeBUP([4, 0, 6, 2, 12, 8], 21)); //-1
