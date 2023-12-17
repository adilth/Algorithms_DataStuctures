/*Description // combinations
make a function that generate all passible combinations each comb need to be in array


*/
/**
 *
 * @param {number|string[]} arr
 * @returns {number|string[]}
 */

export function combinations(arr) {
  if (!Array.isArray(arr)) return [[]];
  if (!arr.length) return [[]];
  let [first, ...rest] = [...new Set(arr)];
  let combWithoutFirst = combinations(rest);

  let combWithFirst = [];
  combWithoutFirst.forEach((comb) => {
    let allComb = [first, ...comb];
    combWithFirst.push(allComb);
  });
  return [...combWithoutFirst, ...combWithFirst];
}

console.log(combinations([1, 1, 2]));
/* output
[
  [ 'd', 'c', 'b', 'a' ],
  [ 'c', 'b', 'a' ],
  [ 'd', 'b', 'a' ],
  [ 'd', 'c', 'a' ],
  [ 'd', 'c', 'b' ],
  [ 'b', 'a' ],
  [ 'c', 'a' ],
  [ 'd', 'a' ],
  [ 'c', 'b' ],
  [ 'd', 'b' ],
  [ 'd', 'c' ],
  [ 'a' ],
  [ 'b' ],
  [ 'c' ],
  [ 'd' ],
  []
]
*/
